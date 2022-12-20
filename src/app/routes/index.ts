import { Router } from "express"
import { createActivityController } from "../../useCases/createActivity"
import { updateActivityController } from "../../useCases/updateActivity"

const routes = Router()

routes.post("/activities", (request, response) => {
    return createActivityController.handle(request, response)
})

routes.put("/activities/:_id", (request, response) => {
    return updateActivityController.handle(request, response)
})

export default routes