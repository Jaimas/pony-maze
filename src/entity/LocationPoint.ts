
export class LocationPoint {
    private xCoord: number;
    private yCoord: number;

    constructor(xCoord: number, yCoord: number) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
    }

    getXCoord() {
        return this.xCoord;
    }

    getYCoord() {
        return this.yCoord;
    }
}