export enum Direction {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}

export const isDirection = (val: any) => {
    return Object.values(Direction).includes(val);
}