

export enum Direction {
    Error,
    Forward,
    Up,
    Down
}

export interface Instruction {
    dir: Direction,
    value: number;
}

export interface Submarine {
    horizontal: number;
    depth: number;
    aim: number | undefined;
}

export function parseInstructions(input: string): Instruction[] {
    const values = input.split("\n").map(s => {
        let row = s.split(" ");
        return {
            dir: row[0],
            val: row[1]
        }
    });
    let instructions: Instruction[] = [];
    values.forEach(s => {
        let dir: Direction = Direction.Error;
        switch (s.dir) {
            case "forward":
                dir = Direction.Forward; break;
            case "up":
                dir = Direction.Up; break;
            case "down":
                dir = Direction.Down; break;
        }
        if (dir !== Direction.Error) {
            let value = +s.val;
            instructions.push({
                dir,
                value
            })
        }
    })
    return instructions;
}