import { Router } from "express";
import { createTask, viewProjectTask, deleteProjectTask } from "../Controller/taskController";

const router: Router = Router();

router.route("/create-task/:projectId").post(createTask);
router.route("/view-user-task/:projectId").get(viewProjectTask);
router.route("/delete-task-project/:projectId/: taskId").delete(deleteProjectTask)

export default router;