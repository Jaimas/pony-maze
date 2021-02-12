import { LocationPoint } from "./LocationPoint";

export class Movable {
    protected name: string;
    protected locationPoint: LocationPoint;

    constructor(name: string, locationPoint: LocationPoint) {
        this.name = name;
        this.locationPoint = locationPoint;
    }

    getLocation() {
        return this.locationPoint;
    }

    moveLeft() {
        this.locationPoint = new LocationPoint(
            this.locationPoint.getXCoord() -1,
            this.locationPoint.getYCoord()
        );
    }

    moveRight() {
        this.locationPoint = new LocationPoint(
            this.locationPoint.getXCoord() +1,
            this.locationPoint.getYCoord()
        );
    }

    moveUp() {
        this.locationPoint = new LocationPoint(
            this.locationPoint.getXCoord(),
            this.locationPoint.getYCoord() -1
        );
    }

    moveDown() {
        this.locationPoint = new LocationPoint(
            this.locationPoint.getXCoord(),
            this.locationPoint.getYCoord() +1
        );
    }
}