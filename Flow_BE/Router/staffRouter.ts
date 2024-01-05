import { Router } from "express";

import { createStaff, deleteStaff, viewUserStaff } from "../Controller/staffController";

const router: Router = Router();

router.route("/create-staff").post(createStaff)
router.route("/view-user-staff/:userId").get(viewUserStaff);

router.route("/delete-user-staff/:userId/:staffId").delete(deleteStaff);

export default router;