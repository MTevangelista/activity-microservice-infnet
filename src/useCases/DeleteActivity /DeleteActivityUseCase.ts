import handleStatus from "../../domain/enum/ActivityStatus"
import { IActivityRepository } from "../../repository/IActivityRepository"
import { AppError } from "../../shared/error/AppError"
import { IDeleteActivityRequestDTO } from "./IDeleteActivityRequestDTO"

export class DeleteActivityUseCase {
    constructor(
        private repository: IActivityRepository
    ) {}

    async execute(data: IDeleteActivityRequestDTO) {
        try {
            await this.repository.delete(data)
        } catch (err: any) {
            throw new AppError(400, err.message)
        }
    }
}