export enum ActivityStatus {
    WaitCorrection = "WaitCorrection",
    Approved = "Approved",
    Disapproved = "Disapproved"
}


export default function handleStatus(grade: Number): ActivityStatus {
    if (grade == undefined) {
        return ActivityStatus.WaitCorrection
    }

    if (grade <= 6) {
        return ActivityStatus.Disapproved
    }
    return ActivityStatus.Approved
}