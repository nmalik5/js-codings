class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        let curr;
        if (this.head === null) {
            this.head = node;
        } else {

            curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;

        }
        this.size++;
    }

    printList() {
        let curr = this.head;
        let str = ' ';

        while (curr) {
            str = str + curr.element + ' --> ';
            curr = curr.next;
        }

        console.log(str);
    }

    insertAt(index, element) {
        let curr = this.head;
        let prev;
        let pos = 0;
        let node = new Node(element);

        if (index === 0) {
            node.next = this.head
            this.head = node;
        } else {
            while (pos < index) {
                pos++;
                prev = curr;
                curr = curr.next;
            }

            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }

    removeAt(index) {
        let curr = this.head;
        let prev
        let pos = 0
        while (pos < index) {
            pos++;
            prev = curr;
            curr = curr.next
        }
        prev.next = curr.next;

        size--;
    }
}

let linkList = new LinkedList();
linkList.add(3);
linkList.add(6);
linkList.add(30);
linkList.add(11);

linkList.printList();

linkList.insertAt(0, 55);

linkList.printList();

linkList.insertAt(3, 33);

linkList.printList();

linkList.removeAt(3);

linkList.printList();