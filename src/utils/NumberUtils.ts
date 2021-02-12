import { inRange, isNull } from "lodash";

export const isInteger = (val: any)  => {
    return !isNull(val) && isFinite(Number(val));
}

export const parseInteger = (val:any) => {
    return isInteger(val) ? Number(val) : 0;
}

export const inRangeInclusively = (val: number, start: number, end: number) => {
    return isInteger(val) &&
        isInteger(start) &&
        isInteger(end) &&
        inRange(val, start, end +1);
}