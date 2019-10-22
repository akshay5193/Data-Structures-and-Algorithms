class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }


    peek() {
        return this.top;
    }



    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;

            this.length++;
            return this;
        }
        else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;

            this.length++;
            return this;
        }
    }



    pop() {
        const unwantedNode = this.top;
        this.top = unwantedNode.next;
        unwantedNode.next = null;

        this.length--;
        return this;
    }


    isEmpty() {
        if (this.top !== null) {
            return false;
        }
        else {
            return true;
        }
    }


    printList() {
        const array = [];
        let currentNode = this.top;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }


}



const myStack = new Stack();
console.log(myStack.peek());


myStack.push('amazon');
myStack.push('google');
myStack.push('microsoft');
myStack.push('XYZ');
myStack.pop();


console.log(myStack);
let printedArray = console.log(myStack.printList());


console.log("Stack 1 isEmpty -> " + myStack.isEmpty());
const secondStack = new Stack();
console.log("Stack 2 isEmpty -> " + secondStack.isEmpty());