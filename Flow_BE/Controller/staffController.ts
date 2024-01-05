import { Request, Response } from "express";
import userModel from "../Model/userModel";
import staffModel from "../Model/staffModel";
import { Types } from "mongoose";
import bcrypt from "bcrypt"
import crypto from "crypto"

export const createStaff = async(req:Request, res:Response)=>{
try {
    const {userId} = req.params
    const {email, avatar, password, staffName} = req.body;
    const user =  await userModel.findById(userId);

    if(user){
        const staff = await staffModel.create({
            staffName,
            email,
            password,
            avatar: staffName.charAt(0),
        });

        user.staff.push(new Types.ObjectId(staff._id))
        user.save();

        return res.status(201).json({
            message: "Staff Created",
            data: staff,
        });
    } else{
        return res.status(404).json({
            message: "Error Matching User",
        });
    }

} catch (error) {
    return res.status(404).json({
        message: "Error Creating User"
    });
}
};


export const viewUserStaff = async (req:Request, res:Response) =>{
    try {
        const {userId} = req.params;
        const user = await userModel.findById(userId).populate({
            path: "staff",
        });
        return res.status(200).json({
            message: "View Users",
            data: user,
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
};



export const deleteStaff = async (req:Request, res:Response) =>{
    try {
        const {userId, staffId} = req.params;
        const user: any = await userModel.findById(userId)
        if (user){
            const staff = await staffModel.findByIdAndDelete(staffId)

            user.staff.pull(new Types.ObjectId(staffId))
            user.save()

            return res.status(201).json({
                message: "Delete  Staff",
                data: staff
            });
        }else{
            return res.status(404).json({
                message: "Error Deleting Staff"
            });
        }
    } catch (error) {
        return res.status(404).json({
            message: "Error Deleting staff",
        })
    }
}
