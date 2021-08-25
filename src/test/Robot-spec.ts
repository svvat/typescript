import { expect } from 'chai';
import { IRobot, Robot } from '../Robot';

describe('Robot', () => {
    let robot: IRobot = new Robot();
    it('can be initialized', () => {
        let robot: IRobot = new Robot();
        expect(robot).to.not.null;
    });
    it('can be positioned', () => {
        robot.setPosition({ x: 1, y: 1});
        expect(robot.reportPosition()).to.equal("1,1");
    });
    it('can move forward', () => {

        robot.setPosition({ x: 1, y: 1});
        robot.advance();
        expect(robot.reportPosition()).to.equal("1,2");
    });
    it('can reverse', () => {

        robot.setPosition({ x: 5, y: 4});
        robot.reverse();
        expect(robot.reportPosition()).to.equal("5,3");
    });
});