
class Stack {

    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        // this.array.push(value);

        if (this.array.length === 0) {
            this.array[0] = value;
            return this;
        }
        else {
            this.array[this.array.length] = value;
            return this;
        }
    }

    pop() {
        if (this.array.length === 0) {
            return "Nothing to pop...";
        }
        else {
            this.array.pop();
        }
    }


    isEmpty() {
        if (this.array.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

}

const stackArray = new Stack();

stackArray.push(3);
stackArray.push(9);
stackArray.push(18);
stackArray.push("will be popped soon");

stackArray.pop();
console.log(stackArray);
console.log(stackArray.length);