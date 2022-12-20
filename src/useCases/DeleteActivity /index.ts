import { ActivityRepository } from "../../repository/implementations/ActivityRepository"
import { DeleteActivityController } from "./DeleteActivityController"
import { DeleteActivityUseCase } from "./DeleteActivityUseCase"

const activityRepository = new ActivityRepository()
const deleteActivityUseCase = new DeleteActivityUseCase(activityRepository)
const deleteActivityController = new DeleteActivityController(deleteActivityUseCase)

export { deleteActivityUseCase, deleteActivityController }