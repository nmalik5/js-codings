/**
 * Queue LIFO
 * Implement queue using two stacks
 * 
 */


class TwoStackQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(element) {
        this.s1.push(element);
    }

    dequeue() {
        if (this.s2.length === 0 && this.s1.length === 0) {
            throw Error('There are no elements to pop');
        } else if (this.s2.length === 0 && this.s1.length > 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        console.log(this.s2.pop());
    }

    printStack1() {
        console.log(this.s1);
    }


}

let q = new TwoStackQueue();
q.enqueue(3);
q.enqueue(5);
q.enqueue(10);
q.enqueue(15);
q.printStack1();
q.dequeue();
q.printStack1();