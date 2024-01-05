import { Router } from "express";
import { createProject, deleteProject, viewUserProject } from "../Controller/projectController";

const router: Router = Router();

router.route("/create-project/:userId").post(createProject)
router.route("/view-user-project/:userId").get(viewUserProject);
router.route("/delete-project-staff/:userId/:projectId").delete(deleteProject)

export default router;