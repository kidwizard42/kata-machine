export default class SinglyLinkedList<T> {
    public length = 0;
    private head: Node;
    private tail: Node;

    // SEEMS LIKE NO ERRORS FROM METHODS.
    //  JUST NOT RETURNING THE RIGHT VALLUE

    constructor() {}

    prepend(item: T): void {
        if (!this.head) {
            this.head = new Node(item);
            this.tail = new Node(item);
            this.length++;
        } else {
            let newHead = new Node(item);
            newHead.next = this.head;
            this.head = newHead;
            this.length++;
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.prepend(item);
        }
        let node = this.head;

        for (let i = 1; i < this.length; i++) {
            if (i === idx) {
                let pushDown = node.next;
                node.next = new Node(item);
                node.next.next = pushDown;
                this.length++;

                return;
            }
            node = node.next;
        }
    }
    append(item: T): void {
        if (!this.head) {
            this.head = new Node(item);
            this.tail = new Node(item);
        } else {
            let newTail = new Node(item);
            this.tail.next = newTail;
            this.tail = newTail;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        let start = this.head;
        if (start.val === item) {
            let newHead = this.head.next;
            let oldHead = this.head;
            this.head.next = null;
            this.head = newHead;

            this.length--;
            return oldHead.val;
        } else {
            for (let i = 1; i < this.length; i++) {
                let mayDelete = start.next;
                if (mayDelete === item) {
                    start.next = mayDelete.next;
                    this.length--;

                    return mayDelete.val;
                }
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let val = this.head;
        for (let i = 1; i < idx; i++) {
            val = val.next;
        }
        return val === null ? null : val.val;
    }
    removeAt(idx: number): T | undefined {
        if (idx === 0) {
            this.head = this.head.next;
            this.length--;
        }
        let node = this.head;
        for (let i = 1; i < idx; i++) {
            if (i === idx) {
                let current = node;
                let nxtInLine = node.next.next;
                current.next = nxtInLine;
                this.length--;

                return current.next.val;
            }
            node = node.next;
        }
        return;
    }
}

class Node {
    public val: any;
    public next: any;
    // private prev: any;
    constructor(value: any) {
        this.val = value;
        this.next = null;
    }
}
