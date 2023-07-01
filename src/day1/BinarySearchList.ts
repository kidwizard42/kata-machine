export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        if (haystack[m] === needle) {
            return true;
        } else if (haystack[m] < needle) {
            lo = m + 1;
        } else {
            hi = m;
        }
    } while (lo < hi);
    return false;

    // Darwood Version    // MAYBE TEST ON LEETCODE??
    // let lo = 0;
    // let hi = haystack.length;
    // while (lo < hi) {
    //     let m = Math.floor((lo + hi) / 2);
    //     if (haystack[m] === needle) {
    //         return true;
    //     } else if (haystack[m] < needle) {
    //         lo = m + 1;
    //     } else {
    //         hi = m - 1;
    //     }
    // }
    // return false;
}
