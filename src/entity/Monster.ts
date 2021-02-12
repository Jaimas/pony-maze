import { LocationPoint } from "./LocationPoint";
import { Movable } from "./Movable";

export class Monster extends Movable {
    constructor(locationPoint: LocationPoint) {
        super("Domokun", locationPoint);
    }

    getName() {
        return this.name;
    }
}