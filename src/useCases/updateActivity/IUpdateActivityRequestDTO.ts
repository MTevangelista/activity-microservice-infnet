import { ActivityStatus } from "../../domain/enum/ActivityStatus"

export interface IUpdateActivityRequestDTO {
    _id: string
    grade: Number
    status?: ActivityStatus
}