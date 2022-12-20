import { ActivityStatus } from "../../domain/enum/ActivityStatus"

export interface ICreateActivityRequestDTO {
    student: string
    subject: string
    grade: Number
    status: ActivityStatus
}