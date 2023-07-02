export default function two_crystal_balls(breaks: boolean[]): number {
    let lastSafePoint: number = 0;
    let squareRoot: number = Math.floor(Math.sqrt(breaks.length));
    let jumpNum = squareRoot;

    while (true) {
        if (breaks[jumpNum] || breaks[jumpNum] === undefined) {
            break;
        } else {
            lastSafePoint = jumpNum;
            jumpNum += squareRoot;
        }
    }

    for (let i = lastSafePoint; i <= jumpNum; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
