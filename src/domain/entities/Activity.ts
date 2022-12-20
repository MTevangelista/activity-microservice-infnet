import mongoose, { Document, Schema } from "mongoose"
import { ActivityStatus } from "../enum/ActivityStatus"

interface IActivity extends Document {
    student: string
    subject: string
    grade: Number
    status: ActivityStatus
}

const schema = new Schema<IActivity>({
    student: {
        type: String,
        require: true,
        trim: true
    },
    subject: {
        unique: true,
        type: String,
        require: true,
    },
    grade: {
        type: Number,
        required: true,
        default: 0.0
    },
    status: {
        type: ActivityStatus,
        require: true
    }
})

const Activity = mongoose.model("Activity", schema)

export { Activity }
