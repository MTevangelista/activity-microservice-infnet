import { ActivityRepository } from "../../repository/implementations/ActivityRepository";
import { CreateActivityController } from "./CreateActivityController";
import { CreateActivityUseCase } from "./CreateActivityUseCase";

const activityRepository = new ActivityRepository()
const createActivityUseCase = new CreateActivityUseCase(activityRepository)
const createActivityController = new CreateActivityController(createActivityUseCase)

export { createActivityUseCase, createActivityController }