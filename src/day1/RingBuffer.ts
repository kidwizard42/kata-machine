//  A ring buffer, also known as a circular buffer, is a data structure that is used
//  to efficiently manage a fixed-size buffer or a continuous stream of data.
//  It is implemented as a fixed-size array that wraps around itself in a circular fashion.

//Another explaination.
// A ring buffer is a fixed-size data structure that behaves like a circular track.
//  It wraps around, overwriting the oldest data when full. It provides constant-time
//  enqueue and dequeue operations for efficient handling of a sliding window of data.

// enqueue and dequeue are O(1) time complexity.

// Ring buffer ts example.
class RingBuffer<T> {
    private buffer: T[];
    private capacity: number;
    private head: number;
    private tail: number;
    private count: number;

    constructor(capacity: number) {
        this.buffer = new Array<T>(capacity);
        this.capacity = capacity;
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }

    public isFull(): boolean {
        return this.count === this.capacity;
    }

    public isEmpty(): boolean {
        return this.count === 0;
    }

    public enqueue(item: T): void {
        if (this.isFull()) {
            throw new Error("Buffer is full, cannot enqueue new item.");
        }
        this.buffer[this.head] = item;
        this.head = (this.head + 1) % this.capacity;
        this.count++;
    }

    public dequeue(): T {
        if (this.isEmpty()) {
            throw new Error("Buffer is empty, cannot dequeue.");
        }
        const item = this.buffer[this.tail];
        this.tail = (this.tail + 1) % this.capacity;
        this.count--;
        return item;
    }

    public peek(): T {
        if (this.isEmpty()) {
            throw new Error("Buffer is empty, cannot peek.");
        }
        return this.buffer[this.tail];
    }

    public clear(): void {
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }

    public getCapacity(): number {
        return this.capacity;
    }

    public getCount(): number {
        return this.count;
    }
}
