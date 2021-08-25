import { IPosition } from "./Position";
export interface IRobot
{
    sendCommands(command:string);
    advance();
    reverse();
    left();
    right();
    reportPosition(): string;
    setPosition(positionInput: IPosition);
    getPosition(): IPosition;
}

export class Robot implements IRobot
{
    private position: IPosition;

    sendCommands(commands: string) {
        let nCmds=commands.length;
        for(var i=0;i<commands.length;i++) {
            let cmd = commands.charAt(i);
            this.execute(cmd);
        }
    }

    getPosition(): IPosition {
        return this.position;
    }

    setPosition(position: IPosition)
    {
        this.position = position;
    }

   
    private execute(order: string)
    {
        switch (order)
        {
            case 'L':
                this.left();
                break;
            case 'R':
                this.right();
                break;
            case 'F':
                this.advance();
                break;
            case 'B':
                this.reverse();
                break;
            default:
            // Unknown command 
            break;
        }
    }

    reverse()
    {
        this.position.y--;
    }
    advance()
    {
        this.position.y++;
    }
    left()
    {
        this.position.x--;
    }
    right()
    {
        this.position.x++;
    }

    public reportPosition():string
    {
        return `${this.position.x},${this.position.y}`;
    }


}

