import {Request, Response} from "express"
import {Types} from "mongoose"
import userModel from "../Model/userModel";
import projectModel from "../Model/projectModel";

export const createProject = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const { projectName, budget, deadline } = req.body;
  
      const user: any = await userModel.findById(userId);
  
      if (user.plan === "freemo") {
        if (user?.project.length <= 5) {
          if (user) {
            const project = await projectModel.create({
              projectName,
              budget,
              deadline,
              budgetGivenOut: 0,
              budgetLeft: budget,
            });
  
            user.project.push(new Types.ObjectId(project._id));
            user.save();
  
            return res.status(201).json({
              message: "creating project",
              data: project,
            });
          } else {
            return res.status(404).json({
              message: "Error matching user",
            });
          }
        }
      } else if (user.plan === "bromo") {
        if (user?.project.length <= 15) {
          if (user) {
            const project = await projectModel.create({
              projectName,
              budget,
              deadline,
              budgetGivenOut: 0,
              budgetLeft: budget,
            });
  
            user.project.push(new Types.ObjectId(project._id));
            user.save();
  
            return res.status(201).json({
              message: "creating project",
              data: project,
            });
          } else {
            return res.status(404).json({
              message: "Error matching user",
            });
          }
        }
      } else if (user.plan === "premo") {
        if (user) {
          const project = await projectModel.create({
            projectName,
            budget,
            deadline,
            budgetGivenOut: 0,
            budgetLeft: budget,
          });
  
          user.project.push(new Types.ObjectId(project._id));
          user.save();
  
          return res.status(201).json({
            message: "creating project",
            data: project,
          });
        } else {
          return res.status(404).json({
            message: "Error matching user",
          });
        }
      }
    } catch (error) {
      return res.status(404).json({
        message: "Error creating user",
      });
    }
  };
  
  export const deleteProject = async (req: Request, res: Response) => {
    try {
      const { userId, projectId } = req.params;
  
      const user: any = await userModel.findById(userId);
  
      if (user) {
        const project = await projectModel.findByIdAndDelete(projectId);
  
        user.project.pull(new Types.ObjectId(projectId));
        user.save();
  
        return res.status(201).json({
          message: "creating project",
          data: project,
        });
      } else {
        return res.status(404).json({
          message: "Error matching user",
        });
      }
    } catch (error) {
      return res.status(404).json({
        message: "Error creating user",
      });
    }
  };
  
  export const viewUserProject = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const project = await userModel.findById(userId).populate({
        path: "project",
      });
  
      return res.status(200).json({
        message: "viewing project",
        data: project,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error viewing project",
      });
    }
  };
  