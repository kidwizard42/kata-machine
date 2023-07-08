export default class ArrayList<T> {
    public length: number;

    // array list strengths and weaknesses.
    // unlike traditional static arrays, array lists can add more room once needed.
    // still have 0(1) when accessing bc of index.
    // Also  O(1) when pushing and popping. (adding/removing from end of array)
    // O(n) when enqueue and dequeue( adding and removing at front of array. js uses unshift and shift)
    // O(n) when adding somewhere in the middle too.

    constructor() {}

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
