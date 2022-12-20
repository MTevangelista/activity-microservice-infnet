import { ActivityFactory } from "../../domain/entities/ActivityFactory"
import { InvalidNameError } from "../../domain/entities/errors/InvalidName"
import { Name } from "../../domain/entities/valueObject/Name"
import { ActivityStatus } from "../../domain/enum/ActivityStatus"
import { IActivityRepository } from "../../repository/IActivityRepository"
import { Either, left, right } from "../../shared/either/Either"
import { AppError } from "../../shared/error/AppError"
import { ICreateActivityRequestDTO } from "./ICreateActivityRequestDTO"

type CreateActivityUseCaseResponse = Promise<Either<InvalidNameError, ICreateActivityRequestDTO>>

export class CreateActivityUseCase {
    constructor(
        private repository: IActivityRepository
    ) { }

    async execute(data: ICreateActivityRequestDTO): CreateActivityUseCaseResponse {
        let { student } = data
        const nameOrError = Name.create(student)

        if (nameOrError.isLeft()) {
            return left(nameOrError.value)
        }

        data.student = nameOrError.value.getName()
        data.status = this.handleStatus(data.grade)
 
        try {
            const user = ActivityFactory.createWith(data)
            const response = await this.repository.save(user)
            return right(response)
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }

    private handleStatus(grade: Number): ActivityStatus {
        if (grade == undefined) {
            return ActivityStatus.WaitCorrection
        }

        if (grade <= 6) {
            return ActivityStatus.Disapproved
        }
        return ActivityStatus.Approved
    }
}