import { Document } from "mongoose"
import { Activity } from "../../domain/entities/Activity"
import { ActivityFactory } from "../../domain/entities/ActivityFactory"
import { ICreateActivityRequestDTO } from "../../useCases/createActivity/ICreateActivityRequestDTO"
import { IUpdateActivityRequestDTO } from "../../useCases/updateActivity/IUpdateActivityRequestDTO"
import { IActivityRepository } from "../IActivityRepository"

export class ActivityRepository implements IActivityRepository {
    async save(user: ICreateActivityRequestDTO): Promise<ICreateActivityRequestDTO> {
        const response = await Activity.create(user)
        return response
    }

    async fetchUserByUID(cpf: string): Promise<Document> {
        const response = await Activity.findOne({ cpf })
        return response
    }

    async update({ _id, grade, status }: IUpdateActivityRequestDTO): Promise<void> {
        await Activity.findByIdAndUpdate(_id, {
            $set: {
                grade, status
            },
        })
    }

    async validateIfUserAlreadyExists(_id: string): Promise<boolean> {
        const activity = ActivityFactory.create()
        return await activity.validateIfObjectIdIsValid(_id)
    }
}