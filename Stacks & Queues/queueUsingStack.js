class Queue {
    constructor() {
        this.enqueueStack = [];
        this.dequeueStack = [];
    }

    enqueue(value) {
        this.enqueueStack.push(value);
    }

    dequeue() {
        while (this.enqueueStack.length) {
            this.dequeueStack.push(this.enqueueStack.pop());
            console.log('stack 2: ', this.dequeueStack);
        }
        let first = this.dequeueStack.pop();
        while (this.dequeueStack.length) {
            this.enqueueStack.push(this.dequeueStack.pop());
        }
        return first;

        // if (this.dequeueStack.length) {
        //     return this.dequeueStack.pop();
        // }

        // while (this.enqueueStack.length) {
        //     this.dequeueStack.push(this.enqueueStack.pop());
        // }

        // return first = this.dequeueStack.pop();
    }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(5);
myQueue.enqueue(9);
console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);