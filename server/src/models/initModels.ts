export async function initModels() {

    await import("./tbDifficulties.js");
    await import("./tbProfilePictures.js");
    await import("./tbStatus.js");
    await import("./tbGyms.js");


    await import("./tbAreaGyms.js");     
    await import("./tbUsers.js");       
    await import("./tbBoulders.js");    
    await import("./tbComments.js");    
    await import("./tbRatings.js");     
    await import("./tbReplies.js");
    await import("./tbDifficultyUsers.js")   ; 


    await import("../relations/relations.js");
}
