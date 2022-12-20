import handleStatus from "../../domain/enum/ActivityStatus"
import { IActivityRepository } from "../../repository/IActivityRepository"
import { AppError } from "../../shared/error/AppError"
import { IUpdateActivityRequestDTO } from "./IUpdateActivityRequestDTO"

export class UpdateActivityUseCase {
    constructor(
        private repository: IActivityRepository
    ) {}

    async execute(data: IUpdateActivityRequestDTO) {
        let { _id, grade } = data
        const userAlreadyExists = await this.repository.validateIfUserAlreadyExists(data._id)

        if (!userAlreadyExists) {
            throw new AppError(404, "User not found")
        }

        const status = handleStatus(grade)

        try {
            await this.repository.update({ _id, grade, status })
        } catch (err: any) {
            throw new AppError(400, err.message)
        }
    }
}