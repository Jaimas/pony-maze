"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction_1 = require("utils/Direction");
describe('Direction', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    describe('isDirection', function () {
        it('isDirection defined', function () {
            expect(Direction_1.isDirection).toBeDefined();
        });
        it('Should return true if parameter is direction', function () {
            expect(Direction_1.isDirection("left")).toBeTruthy();
        });
        it('Should return false if parameter is not direction', function () {
            expect(Direction_1.isDirection("not direction")).toBeFalsy();
        });
        it('Should return false if parameter is null', function () {
            expect(Direction_1.isDirection(null)).toBeFalsy();
        });
        it('Should return false if parameter is undefined', function () {
            expect(Direction_1.isDirection(undefined)).toBeFalsy();
        });
        it('Should return false if parameter is Infinity', function () {
            expect(Direction_1.isDirection(Infinity)).toBeFalsy();
        });
        it('Should return false if parameter is NaN', function () {
            expect(Direction_1.isDirection(NaN)).toBeFalsy();
        });
    });
});
//# sourceMappingURL=Direction.test.js.map