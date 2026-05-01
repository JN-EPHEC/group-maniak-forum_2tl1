import { use } from "react";

export const postFormCreateBoulder = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data)
    const boulderDesc = data.get("boulderDescForm")
    const boulderName = data.get("boulderNameForm")
    const boulderImageurl = data.get("boulderImageUrlForm")
    const levelId = data.get("boulderLevelIdForm")
    const areaId = data.get("boulderAreaIdForm")
    const boulderReleaseDate = data.get("boulderDateForm")
    const userId = 1
    console.log(boulderDesc, boulderName, boulderImageurl, levelId, areaId, boulderReleaseDate, userId)
};