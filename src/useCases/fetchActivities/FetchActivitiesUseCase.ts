import { IActivityRepository } from "../../repository/IActivityRepository";
import { AppError } from "../../shared/error/AppError";

export class FetchActivitiesUseCase {
    constructor(
        private repository: IActivityRepository
    ) {}

    async execute() {
        try {
            const users = await this.repository.fetchActivities()
            return users  
        } catch (error) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}