


export function validateUserRegistration(
    age:number,
    role: "admin"|"user"|"stagiaire",
    email:string
): boolean {
    
    if(!["admin", "user", "stagiaire"].includes(role)){
        throw new Error("Rôle invalide");
    } else {
        if(age<18 && role!=="stagiaire"){return false};
        if(age>120){throw new Error("Age invalide")};
        if(! /.+@.+\..+/.test(email)){return false};
        }
        return true
    };