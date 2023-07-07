export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    // adds to the queue
    enqueue(item: T): void {
        const node = { val: item } as Node<T>;
        // for some reason fails if i dont add the this.head part
        if (!this.tail || !this.head) {
            this.tail = this.head = node;
        } else {
            const newTail = node;
            this.tail.next = newTail;
            this.tail = newTail;
        }
        this.length++;
    }

    // removes from queue
    deque(): T | undefined {
        if (!this.head || !this.head) {
            return undefined;
        }

        this.length--;
        let h = this.head;
        this.head = this.head.next;
        return h.val;
    }

    // see the top thing at the queue
    peek(): T | undefined {
        return this.head?.val;
    }
}

type Node<T> = {
    val: T;
    next?: Node<T>;
};
