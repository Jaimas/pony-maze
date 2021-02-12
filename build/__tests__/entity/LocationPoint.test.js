"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocationPoint_1 = require("entity/LocationPoint");
describe('Location Point', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    it('Should build valid object', function () {
        var location = new LocationPoint_1.LocationPoint(1, 2);
        expect(location.getXCoord()).toEqual(1);
        expect(location.getYCoord()).toEqual(2);
    });
});
//# sourceMappingURL=LocationPoint.test.js.map