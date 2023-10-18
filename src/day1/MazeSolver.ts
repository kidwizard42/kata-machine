// RECURSION has two parts.
// 1. base case where you stop recursing.  // BASE CASE IS VERY IMPORTANT.
// Make a good one and recurison will be easier
// 2. recursion.

// The recursion part (mentioned above) can be divided into 3 of its own parts
// 1. pre: do something before you recurse. ie return n+ recurse().
//      the n+ is added to the recurse function  before it recurses.
// 2. recurse: the actual recursion
// 3. post do something after recursion. ie. log a value.
//      doesn't get done till recurse hits base case

// EXAMPLE
// try in console. logs 2, 3,4,5
// function main(){
//     function recurse(n){
//         if (n===1 ) return 1  ---- BASE CASE
//         const out =  n+ recurse(n-1);  ----- n+ is the PRE RECURSION
//         console.log(n); ------ POST RECURSION
//         return out
//     }

//     recurse(5)
// }

const dir = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // down
    [0, 1], // up
];
function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // BaseCase
    //  off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // at ending point
    if (curr.x == end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // if seen this tile before
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3. Recurse
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        const newCurr = { x: curr.x + x, y: curr.y + y };

        if (walk(maze, wall, newCurr, end, seen, path)) return true;
    }

    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    // adding false to every spot in array thats blank
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
