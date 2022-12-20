import { Document } from "mongoose"
import { Activity } from "../../domain/entities/Activity"
import { ICreateActivityRequestDTO } from "../../useCases/createActivity/ICreateActivityRequestDTO"
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
}