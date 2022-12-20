import { Router } from "express"
import { createActivityController } from "../../useCases/createActivity"

const routes = Router()

routes.post("/activities", (request, response) => {
    return createActivityController.handle(request, response)
})

export default routes