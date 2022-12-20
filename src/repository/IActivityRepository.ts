import { ICreateActivityRequestDTO } from '../useCases/createActivity/ICreateActivityRequestDTO'
import { Document } from "mongoose"

export interface IActivityRepository {
    save(data: ICreateActivityRequestDTO): Promise<ICreateActivityRequestDTO>
}