import mongoose, { Document, Schema } from "mongoose"
import { ActivityStatus } from "../enum/ActivityStatus"

interface IActivity extends Document {
    student: string
    subject: string
    grade: Number
    status: ActivityStatus

    validateIfObjectIdIsValid(id: string): Promise<boolean>
}

const schema = new Schema<IActivity>({
    student: {
        type: String,
        require: true,
        trim: true
    },
    subject: {
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

schema.methods.validateIfObjectIdIsValid = async function(id: string): Promise<boolean> {
    return mongoose.Types.ObjectId.isValid(id)
}

const Activity = mongoose.model("Activity", schema)

export { Activity }
