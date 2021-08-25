'use strict';
import * as fs from 'fs';
import { exit } from 'process';
import { IChamber, Chamber } from './Chamber';
import { IPosition } from './Position';
import { Robot } from './Robot';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputLines: string[] = [];
let currentLine: number = 0;


const inputString = fs.readFileSync('data.txt','utf8');

fs.close;

inputLines = inputString.split('\n');

function readLine(): string {
    return inputLines[currentLine++];
}

main();

function main() {

    let chamber: IChamber = new Chamber(10, 10);
    let robot = new Robot();

    let input = readLine();
    while(input != undefined) {
        console.log(input+ '\n');


        let items = input.split(',');
        let nItems = items.length;

        if(nItems==3) {
            const position: IPosition = { x: Number(items[0]), y: Number(items[1])}
            robot.setPosition(position);
            robot.sendCommands(items[2]);
            console.log(`${robot.reportPosition()}\n`);
        }

        input = readLine();
    }
    exit()
}
