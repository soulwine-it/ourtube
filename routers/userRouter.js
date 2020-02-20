import express from "express";
import routes from "../routes.js";
import {
    users,
    userDeatil,
    editProfile,
    changePassword
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDeatil);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter