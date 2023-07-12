// second attempt at bubbleSort  O(n2) time complexity
test("bug", function () {
    // test doesn't work unless in the test file.
    // npx jest bug
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bug(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

export function bug(arr: number[]) {
    const swap = (idx: number, idx2: number) => {
        const hold = arr[idx];
        arr[idx] = arr[idx2];
        arr[idx2] = hold;
    };
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
            }
        }
    }

    return arr;
}
