import { ActivityRepository } from "../../repository/implementations/ActivityRepository"
import { FetchActivitiesController } from "./FetchActivitiesController"
import { FetchActivitiesUseCase } from "./FetchActivitiesUseCase"

const activityRepository = new ActivityRepository()
const fetchActivitiesUseCase = new FetchActivitiesUseCase(activityRepository)
const fetchActivitiesController= new FetchActivitiesController(fetchActivitiesUseCase) 

export { fetchActivitiesUseCase, fetchActivitiesController }
