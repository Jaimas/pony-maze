"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberUtils_1 = require("utils/NumberUtils");
describe('NumberUtils', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    describe('isInteger', function () {
        it('isInteger defined', function () {
            expect(NumberUtils_1.isInteger).toBeDefined();
        });
        it('Should return true if number parameter', function () {
            expect(NumberUtils_1.isInteger(1)).toBeTruthy();
        });
        it('Should return true if string parameter', function () {
            expect(NumberUtils_1.isInteger("1")).toBeTruthy();
        });
        it('Should return false if null parameter', function () {
            expect(NumberUtils_1.isInteger(null)).toBeFalsy();
        });
        it('Should return false if undefined parameter', function () {
            expect(NumberUtils_1.isInteger(undefined)).toBeFalsy();
        });
        it('Should return false if NaN parameter', function () {
            expect(NumberUtils_1.isInteger(NaN)).toBeFalsy();
        });
        it('Should return false if Infinity parameter', function () {
            expect(NumberUtils_1.isInteger(Infinity)).toBeFalsy();
        });
    });
    describe('parseInteger', function () {
        it('parseInteger defined', function () {
            expect(NumberUtils_1.parseInteger).toBeDefined();
        });
        it('Should return valid integer if number parameter', function () {
            expect(NumberUtils_1.parseInteger(1)).toEqual(1);
        });
        it('Should return valid integer if string parameter', function () {
            expect(NumberUtils_1.parseInteger("1")).toEqual(1);
        });
        it('Should return invalid integer if NaN parameter', function () {
            expect(NumberUtils_1.parseInteger(NaN)).toEqual(0);
        });
        it('Should return invalid integer if Infinity parameter', function () {
            expect(NumberUtils_1.parseInteger(Infinity)).toEqual(0);
        });
    });
    describe('inRangeInclusively', function () {
        it('inRangeInclusively defined', function () {
            expect(NumberUtils_1.inRangeInclusively).toBeDefined();
        });
        it('Should return true if in range', function () {
            expect(NumberUtils_1.inRangeInclusively(2, 1, 3)).toBeTruthy();
        });
        it('Should return true if equal min range value', function () {
            expect(NumberUtils_1.inRangeInclusively(2, 2, 3)).toBeTruthy();
        });
        it('Should return true if equal max range value', function () {
            expect(NumberUtils_1.inRangeInclusively(3, 2, 3)).toBeTruthy();
        });
        it('Should return false if out of range (lower)', function () {
            expect(NumberUtils_1.inRangeInclusively(1, 2, 3)).toBeFalsy();
        });
        it('Should return false if out of range (higher)', function () {
            expect(NumberUtils_1.inRangeInclusively(4, 2, 3)).toBeFalsy();
        });
        it('Should return false if invalid parameters', function () {
            expect(NumberUtils_1.inRangeInclusively(NaN, NaN, NaN)).toBeFalsy();
        });
        it('Should return false if invalid parameters', function () {
            expect(NumberUtils_1.inRangeInclusively(Infinity, Infinity, Infinity)).toBeFalsy();
        });
    });
});
//# sourceMappingURL=NumberUtils.test.js.map