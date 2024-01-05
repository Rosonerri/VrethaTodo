import { Document, Schema, Types, model } from "mongoose";

interface iProject{
    projectName: string;
    deadLine: string;
    budget: number;
    budgetGivenOut: number;
    budgetLeft: number;
    task: Array<{}>;
    user: {};
}

interface iProjectData extends iProject, Document{}

const projectModel = new Schema<iProjectData>(
    {
        projectName: {
            type: String,
        },
        deadLine: {
            type: String,
        },
        budget: {
            type: Number,
        },
        budgetGivenOut: {
            type: Number,
        },
        budgetLeft: {
            type: Number,
        },

        task: [
            {
                type: Types.ObjectId,
                ref: "users",
            }
        ],
        user: {
            type: Types.ObjectId,
            ref: "users",
        },
    },
    {timestamps: true}
);

export default model<iProjectData>("projects", projectModel)

