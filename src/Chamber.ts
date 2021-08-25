'use strict';

import { IPosition } from "./Position";

export interface IChamber
{
    xMax: number;
    yMax: number;
    validate(pos: IPosition) : IPosition;
}
export class Chamber implements IChamber
{
    xMax: number;
    yMax: number;

    constructor(xMax: number, yMax:number )
    {
        this.xMax = xMax;
        this.yMax = yMax;
    }

    // limit navigation to chamber
    validate(pos: IPosition) : IPosition {
        if (pos.y > this.yMax) pos.y = this.yMax;
        if (pos.x > this.xMax) pos.x = this.xMax;
        if (pos.y < 0) pos.y = 0;
        if (pos.x < 0) pos.x = 0;
        return pos;
    }

}