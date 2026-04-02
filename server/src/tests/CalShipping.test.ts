import { describe, test, expect } from "@jest/globals";
import { calculateShipping } from "../utils/shipping";
import { ShippingCases} from "./cases/CalShippingCases";
type ShippingCase = [number, number, 'standard' | 'express', number | "Exception", string];
describe("Shipping Utils", () => {
    test.each(ShippingCases as ShippingCase[])(
        "%d km, %d kg, %s → %s | %s", // prend la description de mon case
        (dist, weight, type, expected,desc) => {
            if (expected === "Exception"){
                expect(()=> calculateShipping(dist,weight,type)).toThrow(Error);
            } else {
                expect(calculateShipping(dist,weight,type)).toBe(expected);
            }
        }
    );
});