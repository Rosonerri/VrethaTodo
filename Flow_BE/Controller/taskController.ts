import { Request, Response } from "express";
import {Types} from "mongoose"
import staffModel from "../Model/staffModel";
import projectModel from "../Model/projectModel";
import taskModel from "../Model/taskModel"
export const createTask = async (req:Request, res: Response)=>{
    try {
        const {projectId} = req.params
        const {taskTitle, budget, deadLine, email} = req.body;

        const staff = await staffModel.findOne({email});
        const project: any = await projectModel.findById(projectId);
        if(project?.budgetLeft < budget){
            return res.status(404).json({
                message: "Budget Left is not enough"
            });
        } else {
            if (project && staff){
                const task: any = await taskModel.create({
                    taskTitle,
                    deadLine,
                    budget,
                    assignee: staff
                });

                await projectModel.findByIdAndUpdate(projectId,

     {
      budgetGivenOut: project.budgetGivenOut + budget, budgetLeft: project.budgetLeft - budget,
     },
                    
    );

    return res.status(201).json({
        message: "creating project",
        data: task,
    });

      } else{
        return res.status(404).json({
            messsage: "Error Matching project",
        })
       }
    }
    } catch (error) {
        return res.status(404).json({
            message: "Error Creating User",
            data: error.message,
        });
    }
};

export const deleteProjectTask = async (req:Request, res:Response)=>{
    try {
        const {taskId, projectId} = req.params

        const project: any =  await projectModel.findById(projectId)

        if (project){
            const task = await taskModel.findByIdAndDelete(projectId);

            project.project.pull(new Types.ObjectId(taskId));
            project.save();

            return res.status(201).json({
                message: "Creating Project",
                data: project,
            });
        } else{
            return res.status(404).json({
                message: "Error Matching User",
            });
        }
    } catch (error) {
        return res.status(404).json({
            message: "Error Creating User"
        })
    }
}

export const viewProjectTask = async (req: Request, res: Response)=>{
    try {
        const {projectId} = req.params;
        const project = await projectModel.findById(projectId).populate({
            path: "task"
        })

        return res.status(200).json({
            message: "Viewing Project",
            data: project,
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error Viewing Project",
        });
    }
};
