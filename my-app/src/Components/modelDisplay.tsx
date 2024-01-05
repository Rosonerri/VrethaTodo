import { FC } from "react";
import {createProject} from "../Api/projectAPI"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTask } from "../Api/taskAPI"
import { GiCancel } from "react-icons/gi";


interface iProps {
  setToggle: any;
  project?: boolean;
  projectID?: any;
  toggle: any
}

const ModelDisplay: FC<iProps> = ({ setToggle, project, projectID }) => {
  const user = JSON.parse(localStorage.getItem("user")!);

  const schema = yup.object({
    projectName: yup.string().required(),
    deadline: yup.string().required(),
    budget: yup.number().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const submitData = handleSubmit(async (data) => {
    createProject(user._id, data).then((res) => {
      console.log(res);
      setToggle(false);
    });
  });

  const submitTaskData = handleSubmit(async (data) => {
    const taskData = {
      taskTitle: data.projectName,
      taskBudget: data.budget,
      assignee: data.deadline,
    };
    createTask(projectID, taskData).then((res) => {
      console.log(res);
      setToggle(false);
    });
  });

  return (
    <div className="border bg-slate-300 w-[500px] h-[600px]">
         
      {project ? (
        <form
        
          onSubmit={submitData}
          className="w-full h-[100vh] flex justify-center items-center fixed top-0 left-0 "
          style={{
            background: "rgba( 255, 255, 255, 0.25 )",
            boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: " blur( 4px )",
          }}
        >
          <div className="w-[400px] border rounded-sm py-4 px-3 ">
            <input
              placeholder="Enter project Name"
              className="w-full h-[40px] border outline-none px-2 my-2 "
              {...register("projectName")}
            />
            <input
              placeholder="Enter budget"
              type="number"
              className="w-full h-[40px] border outline-none px-2 my-2 "
              {...register("budget")}
            />
            <input
              placeholder="Enter deadline"
              className="w-full h-[40px] border outline-none px-2 my-2 "
              {...register("deadline")}
            />

            <button
              className="h-10 bg-fuchsia-600 w-full text-white mt-4 "
              type="submit"
            >
              Add Project
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={submitTaskData}
          className="w-full h-[100vh] flex justify-center items-center fixed top-0 left-0 "
          style={{
            background: "rgba( 255, 255, 255, 0.25 )",
            boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: " blur( 4px )",
          }}
        >
          <div className="w-[400px] border rounded-sm py-4 px-3 ">
            <input
              placeholder="Enter project Name"
              className="w-full h-[40px] border outline-none px-2 my-2 "
              {...register("projectName")}
            />
            <input
              placeholder="Enter budget"
              type="number"
              className="w-full h-[40px] border outline-none px-2 my-2 "
              {...register("budget")}
            />
            <input
              placeholder="Enter deadline"
              className="w-full h-[40px] border outline-none px-2 my-2 "
              {...register("deadline")}
            />

            <button
              className="h-10 bg-fuchsia-600 w-full text-white mt-4 "
              type="submit"
            >
              Add Project
            </button>
          </div>
        </form>
      )}
      
    </div>
  );
};

export default ModelDisplay;
