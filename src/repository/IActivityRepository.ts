import { ICreateActivityRequestDTO } from '../useCases/createActivity/ICreateActivityRequestDTO'
import { Document } from "mongoose"
import { IUpdateActivityRequestDTO } from '../useCases/updateActivity/IUpdateActivityRequestDTO'

export interface IActivityRepository {
    save(data: ICreateActivityRequestDTO): Promise<ICreateActivityRequestDTO>
    update(data: IUpdateActivityRequestDTO): Promise<void>
    delete(data: IDeleteActivityRequestDTO): Promise<void>
    validateIfActivityExists(_id: string): Promise<boolean>
    fetchActivities(): Promise<Document[]>
}