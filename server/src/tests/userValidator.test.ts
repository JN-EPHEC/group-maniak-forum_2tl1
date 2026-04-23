import { describe, test, expect } from "@jest/globals";
import {validateUserRegistration} from "../utils/userValidator.js"
import {userCases} from "./cases/userValidatorCases.js";
type UserCaseType = [number, "admin"|"user"|"stagiaire", string, boolean | "exception"];
describe("Shipping Utils", () => {
    test.each(userCases as UserCaseType[])(
        "%d ans, role : %s , email :  %s | %s", // prend la description de mon case
        (age, role, email, expected,) => {
            if (expected === "exception"){
                expect(()=> validateUserRegistration(age, role, email)).toThrow(Error);
            } else {
                expect(validateUserRegistration(age, role, email)).toBe(expected);
            }
        }
    );
});