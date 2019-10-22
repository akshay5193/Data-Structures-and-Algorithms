class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}


class DoublyLinkedList {
    constructor(value) { // this will take a value to start the list or put into the list
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.tail = this.head;
        this.length = 1;
    }



    append(value) {
        const newNode = new Node(value);    // Creating an instance of node class to avoid repeating of code.
        newNode.previous = this.tail;
        this.tail.next = newNode;           // update the old tail's next to the new node
        this.tail = newNode;                // make this new node the new tail of the list
        this.length++;                      // increment the length of the LL
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }


    insert(value, index) {
        // Check parameters
        if (index >= this.length) {     // If the index is too large than the length of the list, simply append at the end
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;   //this.traverseToIndex(index);

        leader.next = newNode;
        newNode.previous = leader;
        newNode.next = follower;
        follower.previous = newNode;

        this.length++;
        return this;
    }


    removeAtIndex(index) {
        if (index >= this.length || index < 0) {
            return "Invalid Index";
        }

        // NEXT 4 LINES ARE WORKING AS WELL
        // const leader = this.traverseToIndex(index - 1);
        // const unwantedNode = leader.next;
        // leader.next = unwantedNode.next;
        // unwantedNode.next.previous = leader;

        const leader = this.traverseToIndex(index - 1);
        const follower = this.traverseToIndex(index + 1);

        const unwantedNode = leader.next;
        unwantedNode.next = null;
        unwantedNode.previous = null;

        leader.next = follower;
        follower.previous = leader;

        console.log(unwantedNode.value)
        console.log("unwanted next: " + unwantedNode.next)
        console.log("unwanted prev: " + unwantedNode.previous)

        this.length--;
        return this;
    }



    remove(value) {

        if (this.head.value === value) {
            const unwantedNode = this.head;
            this.head = unwantedNode.next;
            this.head.previous = null;
            unwantedNode.next = null;

            console.log("unwanted next was old HEAD NODE: " + unwantedNode.value)
            console.log("unwanted next: " + unwantedNode.next)
            console.log("unwanted prev: " + unwantedNode.previous)

            return this;
        }

        if (this.tail.value === value) {
            const unwantedNode = this.tail;
            this.tail = unwantedNode.previous;
            this.tail.next = null;

            console.log("unwanted next was old TAIL NODE: " + unwantedNode.value)
            console.log("unwanted next: " + unwantedNode.next)
            console.log("unwanted prev: " + unwantedNode.previous)

            return this;
        }

        let currentNode = this.head;

        while (currentNode.value !== value) {
            currentNode = currentNode.next;

            if (currentNode.value === value) {
                const leader = currentNode.previous;
                const follower = currentNode.next;

                const unwantedNode = leader.next;
                unwantedNode.next = null;
                unwantedNode.previous = null;

                leader.next = follower;
                follower.previous = leader;

                console.log(unwantedNode.value)
                console.log("unwanted next: " + unwantedNode.next)
                console.log("unwanted prev: " + unwantedNode.previous)

                this.length--;
                return this;
            }

            if (currentNode.next === null && currentNode.value !== value) {
                return "There is no node with the given value";
            }
        }
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

const DLL = new DoublyLinkedList(10);

DLL.append(18);
DLL.prepend(3);
DLL.append(9);
DLL.prepend(27);

DLL.insert(90, 3);
DLL.insert(30, 4);
DLL.insert(15, 4);

DLL.removeAtIndex(2);
DLL.remove(9);

console.log(DLL);
console.log(DLL.printList());