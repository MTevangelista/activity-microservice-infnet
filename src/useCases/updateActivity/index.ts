import { ActivityRepository } from "../../repository/implementations/ActivityRepository"
import { UpdateActivityController } from "./UpdateActivityController"
import { UpdateActivityUseCase } from "./UpdateActivityUseCase"

const activityRepository = new ActivityRepository()
const updateActivityUseCase = new UpdateActivityUseCase(activityRepository)
const updateActivityController = new UpdateActivityController(updateActivityUseCase)

export { updateActivityUseCase, updateActivityController }