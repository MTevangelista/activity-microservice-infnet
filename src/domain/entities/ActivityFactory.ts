import { ICreateActivityRequestDTO } from "../../useCases/createActivity/ICreateActivityRequestDTO";
import { Activity } from "./Activity";

export class ActivityFactory {
    static create() { 
        return new Activity()
    }

    static createWith(data: ICreateActivityRequestDTO): ICreateActivityRequestDTO {
        return new Activity(data)
    }
}