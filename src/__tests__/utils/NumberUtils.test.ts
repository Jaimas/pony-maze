import { isInteger, parseInteger, inRangeInclusively } from "utils/NumberUtils";

describe('NumberUtils', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    describe('isInteger', () => {
        it('isInteger defined', () => {
            expect(isInteger).toBeDefined();
        });

        it('Should return true if number parameter', () => {
            expect(isInteger(1)).toBeTruthy();
        });

        it('Should return true if string parameter', () => {
            expect(isInteger("1")).toBeTruthy();
        });

        it('Should return false if null parameter', () => {
            expect(isInteger(null)).toBeFalsy();
        });

        it('Should return false if undefined parameter', () => {
            expect(isInteger(undefined)).toBeFalsy();
        });

        it('Should return false if NaN parameter', () => {
            expect(isInteger(NaN)).toBeFalsy();
        });

        it('Should return false if Infinity parameter', () => {
            expect(isInteger(Infinity)).toBeFalsy();
        });
    });

    describe('parseInteger', () => {
        it('parseInteger defined', () => {
            expect(parseInteger).toBeDefined();
        });

        it('Should return valid integer if number parameter', () => {
            expect(parseInteger(1)).toEqual(1);
        });

        it('Should return valid integer if string parameter', () => {
            expect(parseInteger("1")).toEqual(1);
        });

        it('Should return invalid integer if NaN parameter', () => {
            expect(parseInteger(NaN)).toEqual(0);
        });

        it('Should return invalid integer if Infinity parameter', () => {
            expect(parseInteger(Infinity)).toEqual(0);
        });
    });

    describe('inRangeInclusively', () => {
        it('inRangeInclusively defined', () => {
            expect(inRangeInclusively).toBeDefined();
        });

        it('Should return true if in range', () => {
            expect(inRangeInclusively(2, 1, 3)).toBeTruthy();
        });

        it('Should return true if equal min range value', () => {
            expect(inRangeInclusively(2, 2, 3)).toBeTruthy();
        });

        it('Should return true if equal max range value', () => {
            expect(inRangeInclusively(3, 2, 3)).toBeTruthy();
        });

        it('Should return false if out of range (lower)', () => {
            expect(inRangeInclusively(1, 2, 3)).toBeFalsy();
        });

        it('Should return false if out of range (higher)', () => {
            expect(inRangeInclusively(4, 2, 3)).toBeFalsy();
        });

        it('Should return false if invalid parameters', () => {
            expect(inRangeInclusively(NaN, NaN, NaN)).toBeFalsy();
        });

        it('Should return false if invalid parameters', () => {
            expect(inRangeInclusively(Infinity, Infinity, Infinity)).toBeFalsy();
        });
    });
});