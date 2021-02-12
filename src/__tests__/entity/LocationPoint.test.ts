import { LocationPoint } from "entity/LocationPoint";

describe('Location Point', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    it('Should build valid object', () => {
        const location = new LocationPoint(1, 2);
        expect(location.getXCoord()).toEqual(1);
        expect(location.getYCoord()).toEqual(2);
    });
});