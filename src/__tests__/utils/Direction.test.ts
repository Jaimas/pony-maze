import { isDirection } from "utils/Direction";

describe('Direction', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    describe('isDirection', () => {
        it('isDirection defined', () => {
            expect(isDirection).toBeDefined();
        });

        it('Should return true if parameter is direction', () => {
            expect(isDirection("left")).toBeTruthy();
        });

        it('Should return false if parameter is not direction', () => {
            expect(isDirection("not direction")).toBeFalsy();
        });

        it('Should return false if parameter is null', () => {
            expect(isDirection(null)).toBeFalsy();
        });

        it('Should return false if parameter is undefined', () => {
            expect(isDirection(undefined)).toBeFalsy();
        });

        it('Should return false if parameter is Infinity', () => {
            expect(isDirection(Infinity)).toBeFalsy();
        });

        it('Should return false if parameter is NaN', () => {
            expect(isDirection(NaN)).toBeFalsy();
        });
    });
});