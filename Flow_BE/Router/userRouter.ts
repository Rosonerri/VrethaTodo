import { Router } from "express";
import { createUserFreemo, deleteOneUser, viewOneUser, viewUsers, createUserBromo, createUserPremo } from "../Controller/userController";

const router: Router = Router();

router.route("/create-user-freemo").post(createUserFreemo);
router.route("/create-user-Bromo").post(createUserBromo);
router.route("/create-user-Premo").post(createUserPremo);
router.route("/view-all-user").get(viewUsers)
router.route("/view-one-user/:userId").get(viewOneUser)
router.route("/delete-user/:userId").delete(deleteOneUser)

export default router;