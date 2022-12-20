import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { FetchActivitiesUseCase } from "./FetchActivitiesUseCase"

export class FetchActivitiesController {
    constructor(
        private fetchActivitiesUseCase: FetchActivitiesUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            const users = await this.fetchActivitiesUseCase.execute()
            return response.json(users)
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}