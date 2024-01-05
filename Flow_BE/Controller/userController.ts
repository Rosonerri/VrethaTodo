import {Request, Response} from "express"
import userModel from "../Model/userModel"
import bcrypt from "bcrypt";
import crypto from "crypto";

export const createUserFreemo = async (req: Request, res: Response) =>{
    try {
        const {companyName, email, password} = req.body
        const generateSalt = await bcrypt.genSalt(10);

        const uniqueCode = crypto.randomBytes(3).toString("hex");

        const hashedPassword = await bcrypt.hash(password, generateSalt);

        const user = await userModel.create({
            companyName, 
            email, 
            password: hashedPassword,
            uniqueCode,
            plan:  "freemo",
        });

        return res.status(201).json({
            message: "Creating user",
            data: user,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error creating user",
        });
    }
};

export const createUserBromo = async (req: Request, res:Response)=>{
try {
    const {companyName, email, password} = req.body
    const generateSalt = crypto.randomBytes(3).toString("hex");

    const uniqueCode = crypto.randomBytes(3).toString("hex");
    const hashedPassword = await bcrypt.hash(password, generateSalt);

    const user = await userModel.create({
        companyName,
        email,
        password: hashedPassword,
        uniqueCode,
        plan: "bromo",
    })

    return res.status(201).json({
        message: "Creating User",
        data: user,
    });

} catch (error) {
    return res.status(404).json({
        message: "Error Creating User",
    });
}
};

export const viewUsers = async (req: Request, res: Response) => {
    try {
      const user = await userModel.find();
  
      return res.status(200).json({
        message: "viewing users",
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error viewing users",
      });
    }
  };

export const createUserPremo = async (req:Request, res:Response) =>{
    try {
        const {companyName, email, password } = req.body;
        const generateSalt = await bcrypt.genSalt(5);

        const uniqueCode = crypto.randomBytes(3).toString("hex");

        const hashedPassword = await bcrypt.hash(password, generateSalt);

        const user = await userModel.create({
            companyName,
            email,
            password: hashedPassword,
            uniqueCode,
            plan: "premo",
        });

        return res.status(201).json({
            message: "Creating User",
            data: user,
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error Creating User",
        });
    }
};

export const siginUsers = async (req:Request, res: Response) =>{
try {
    const {email, password} = req.body
    const user = await userModel.find();

    
    return res.status(200).json({
        message: "Viewing Users",
        data: user,
    });
} catch (error) {
    return res.status(404).json({
        message: "Error viewing users",
    });
}
};

export const viewOneUser = async (req: Request, res:Response) =>{
try {
    const {userId} = req.params;
    const user = await userModel.findById(userId)

    return res.status(200).json({
        message: "Viewing One Users",
        data: user,
    })
} catch (error) {
    return res.status(404).json({
        message: "error"
    })
}
}

export const deleteOneUser = async  (req: Request, res: Response) =>{
try {
    const { userId } = req.params;
    const user = await userModel.findByIdAndDelete(userId)

    return res.status(200).json({
        message: "deleting users",
        data: user,
    })
} catch (error) {
    return res.status(404).json({
        message: "error deleting data",
    });
}
};

