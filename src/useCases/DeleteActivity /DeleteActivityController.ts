import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { DeleteActivityUseCase } from "./DeleteActivityUseCase"

export class DeleteActivityController {
    constructor(
        private deleteActivityUseCase: DeleteActivityUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { _id } = request.params

        try {
            await this.deleteActivityUseCase.execute({ _id })
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