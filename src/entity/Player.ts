import { LocationPoint } from "./LocationPoint";
import { Movable } from "./Movable";

export class Player extends Movable {
    constructor(name: string, locationPoint: LocationPoint) {
        super(name, locationPoint);
    }

    getName() {
        return this.name;
    }
}