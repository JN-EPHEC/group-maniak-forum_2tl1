import { validatePassword } from "../utils/password";
import { describe, test, expect,it} from "@jest/globals";

describe("Password Validator - White Box Testing", () => {

    // Test initial pour initialiser le rapport de couverture
    // Ce test ne couvre que la première ligne de la fonction (Branch 1)
    it("devrait rejeter un mot de passe vide", () => {
        const result = validatePassword("", 25);
        expect(result).toBe(false);
    });
    // TODO: Ajoutez vos tests ici pour atteindre 100% de couverture...
    it("devrai rejeter un mdp pas assez long",()=>{
        const result = validatePassword("caca", 25);
        expect(result).toBe(false);
    });
    it("devrai rejeter un mdp trop long",()=>{
        const result = validatePassword("cacapipiproutcacapipiprout", 25);
        expect(result).toBe(false);
    });
    it("devrait refuser si C'est un enfant et que son mdp n'a pas de lettre minuscule",()=>{
        const result = validatePassword("CACAPIPIPROUT", 8);
        expect(result).toBe(false);
    });
    it("devrait actepter si C'est un enfant et que son mdp a des lettres minuscules",()=>{
        const result = validatePassword("cacapipiproute", 8);
        expect(result).toBe(true);
    });
    it("devrait refuser si C'est un ado/adulte et que son mdp a pas de lettre majuscule ou n'a pas de minuscules ou n'a pas de nombre ",()=>{
        const result = validatePassword("??????????", 19);
        expect(result).toBe(false);
    });
    it("devrait refuser si C'est un ado/adulte et que son mdp n'a pas de lettre special",()=>{
        const result = validatePassword("cacaPIPIprout3", 19);
        expect(result).toBe(false);
    });
    it("devrait refuser si C'est un senior et que son mdp n'a pas de chiffres et de majuscule",()=>{
        const result = validatePassword("cacapipiproute", 66);
        expect(result).toBe(false);
    });
    it("devrait accepter si C'est un senior/ado/senior et que son mdp a des/une lettre/s minuscule/s, des/un chiffre/s, des/une majuscules et des/un caractére/s spéciaux ",()=>{
        const result = validatePassword("cacaPIPIprout3?", 66);
        expect(result).toBe(true);
    });
});
