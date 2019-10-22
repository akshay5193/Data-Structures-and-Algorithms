// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) { // this will take a value to start the list or put into the list
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // Create a new node
        // const newNode = {
        //     value: value,
        //     next: null
        // };

        const newNode = new Node(value);    // Creating an instance of node class to avoid repeating of code.
        this.tail.next = newNode;   // update the old tail's next to the new node
        this.tail = newNode;        // make this new node the new tail of the list
        this.length++;              // increment the length of the LL
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);    // Creating an instance of node class to avoid repeating of code.
        newNode.next = this.head;   // making the new node's next point to the current list's head
        this.head = newNode;        // now update the head of the list to be the new node
        this.length++;
        return this;
    }

    insert(index, value) {
        // Check parameters
        if (index >= this.length) {     // If the index is too large than the length of the list, simply append at the end
            return this.append(value);
        }

        const newNode = new Node(value);                    // Create a new node to be inserted
        const leader = this.traverseToIndex(index - 1)      // Grab the reference to the node after which we want to add the new node.
        const holdingPointer = leader.next;                 // Storing the reference in holding pointer
        leader.next = newNode;                              // Make the leader point to the New Node
        newNode.next = holdingPointer;                      // Make the New Node point the next node whose reference is stored in holding pointer

        this.length++;
        return this;
    }

    traverseToIndex(index) {
        //  Check Parameters
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;     // Keep traversing through the nodes till the point counter is equal to the given index
            counter++;
        }

        return currentNode;     // This is the index where our new node should go
    }


    removeAtIndex(index) {
        if (index >= this.length || index < 0) {
            return "Invalid Index";
        }

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;

        this.length--;
        return this;
    }


    removeLast() {
        if (this.length === 1) {
            this.head = null;
            this.length--;
            return this;
        }

        let currentNode = this.head;

        while (currentNode.next.next !== null) {
            currentNode = currentNode.next;
        }
        console.log(`Found the last node with value: ${currentNode.next.value} and deleted it...`);
        currentNode.next = null;

    }


    reverseList() {
        if (!this.head.next || this.length === 1) {
            return this;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {      // while the second node exists and it is not null
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;

        return this;
    }

    oddEvenList() {
        if (this.head !== null) {
            let odd = this.head;
            let even = this.head.next;

            while (odd.next && odd.next.next) {
                let temp = odd.next;
                odd.next = odd.next.next;
                odd = odd.next;
                temp.next = odd.next;
            }
            odd.next = even;
        }
        return this;
    }

    nextGreaterNode() {
        let array = new Array();
        while (this.head) {
            array.push(this.head.value);
            this.head = this.head.next;
        }

        let result = new Array(array.length).fill(0);
        let stack = new Array();

        for (let i = 0; i < array.length; i++) {
            while ((stack.length > 0) && (array[stack[stack.length - 1]] < array[i])) {
                result[stack.pop()] = array[i];
            }
            stack.push(i);
        }
        return result;
    }


    printList() {
        const array = [];
        let currentNode = this.head;

        // Using while loop to print since we do not know the length of our Linked List
        while (currentNode !== null) {          // Travering through the list till we get the tail node which points to null
            array.push(currentNode.value);      // Push each node's value in the array
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList);
myLinkedList.append(18);
myLinkedList.append(39);
myLinkedList.prepend(1);
myLinkedList.prepend(3);

myLinkedList.insert(4, 100);
myLinkedList.insert(3, 27);

// myLinkedList.removeLast();

console.log(myLinkedList.printList());
// console.log(myLinkedList.oddEvenList().printList());

console.log(myLinkedList.nextGreaterNode())
// console.log(myLinkedList.removeAtIndex(1).printList());

// console.log(myLinkedList.reverseList().printList()