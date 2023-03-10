import { Router } from "express"
import { createActivityController } from "../../useCases/createActivity"
import { deleteActivityController } from "../../useCases/DeleteActivity "
import { fetchActivitiesController } from "../../useCases/fetchActivities"
import { updateActivityController } from "../../useCases/updateActivity"

const routes = Router()

routes.post("/register/activities", (request, response) => {
    return createActivityController.handle(request, response)
})

routes.get("/activities", (request, response) => {
    return fetchActivitiesController.handle(request, response)
})

routes.put("/update/activities/:_id", (request, response) => {
    return updateActivityController.handle(request, response)
})

routes.delete("/delete/activities/:_id", (request, response) => {
    return deleteActivityController.handle(request, response)
})

export default routes