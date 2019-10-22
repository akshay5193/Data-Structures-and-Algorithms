class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value)

        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;

            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (currentNode.value === value) {
                return true;
            }
        }
        return null;
    }

    dfsInorder() {
        return traverseInorder(this.root, []);
    }

    dfsPostorder() {
        return traversePostorder(this.root, []);
    }

    dfsPreorder() {
        return traversePreorder(this.root, []);
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

function traverseInorder(node, list) {
    if (node.left) {
        traverseInorder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInorder(node.right, list);
    }
    return list;
}

function traversePostorder(node, list) {
    if (node.left) {
        traversePostorder(node.left, list);
    }
    if (node.right) {
        traversePostorder(node.right, list);
    }
    list.push(node.value);
    return list;
}

function traversePreorder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreorder(node.left, list);
    }
    if (node.right) {
        traversePreorder(node.right, list);
    }
    return list;
}

let tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree);
console.log(tree.dfsInorder());
console.log(tree.dfsPreorder());
console.log(tree.dfsPostorder());