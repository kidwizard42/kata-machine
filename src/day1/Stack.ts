export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { val: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
        } else {
            node.below = this.head;
            this.head = node;
        }
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        const head = this.head;

        if (this.length === 0) {
            this.head = undefined;
            return head?.val;
        }
        this.head = this.head?.below;
        return head?.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}

type Node<T> = {
    val: T;
    below?: Node<T>;
};
