import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { UpdateActivityUseCase } from "./UpdateActivityUseCase"

export class UpdateActivityController {
    constructor(
        private updateActivityUseCase: UpdateActivityUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { _id } = request.params
        const { grade } = request.body

        try {
            await this.updateActivityUseCase.execute({ _id, grade })
            return response.status(200).send()
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}