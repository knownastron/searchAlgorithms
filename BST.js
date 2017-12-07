const help = require('./searchHelper.js');
const { Queue } = require('./Queue.js');

class BST {
    constructor() {
        this.root = null;
    }

    size() {
        return BST.size(this.root);
    }

    static size(currentNode) {
        if (currentNode === null || currentNode === undefined) return 0;
        return currentNode.N;
    }

    get (key) {
    // returns the value of the given key
        return BST.get(this.root, key);
    }

    static get (currentNode, key) {
        if (currentNode === null) return null;
        if (currentNode.key > key) {
            return BST.get(currentNode.left, key);
        } else if (currentNode.key < key) {
            return BST.get(currentNode.right,key);
        } else {
            return currentNode.val;
        }
    }

    put(key, val) {
        this.root = BST.put(this.root, key, val);
    }

    getNode(key) {
    // returns the value of the given key
        return BST.getNode(this.root, key);
    }

    static getNode(currentNode, key) {
        if (currentNode === null) {return null;}
        if (currentNode.key > key) {
            return BST.getNode(currentNode.left, key);
        } else if (currentNode.key < key) {
            return BST.getNode(currentNode.right,key);
        } else {
            return currentNode;
        }
    }


    static put(currentNode, key, val) {
        if (currentNode === null) return new help.Node(key, val, 1);
        if (currentNode.key > key) {
            currentNode.left = BST.put(currentNode.left, key, val);
        } else if (currentNode.key < key) {
            currentNode.right = BST.put(currentNode.right, key, val);
        } else {
            currentNode.val = val;
        }
        currentNode.N = BST.size(currentNode.left) +
                        BST.size(currentNode.right) + 1;
        return currentNode;
    }

    min() {
        return BST.min(this.root);
    }

    static min(currentNode) {
        if (currentNode.left === null || currentNode.left === undefined) return currentNode;
        return BST.min(currentNode.left);
    }

    max() {
        return BST.max(this.root);
    }

    static max(currentNode) {
        if (currentNode.right === null) return currentNode;
        return BST.max(currentNode.right);
    }

    floor(key) {
        let theNode = BST.floor(key, this.root);
        if (theNode === null) return null;
        return theNode.key;
    }

    static floor(key, currentNode) {
        if (currentNode === null) return null;
        if (key === currentNode.key) return currentNode;
        if (key < currentNode.key) return BST.floor(key, currentNode.left);
        let possibleRight = BST.floor(key, currentNode.right);
        if (possibleRight !== null) return possibleRight;
        else return currentNode;
        }

    ceil(key) {
        let theNode = BST.ceil(key, this.root);
        if (theNode === null) return null;
        return theNode.key;
    }

    static ceil(key, currentNode) {
        if (currentNode === null) return null;
        if (key === currentNode.key) return currentNode;
        if (key > currentNode.key) return BST.ceil(key, currentNode.right);
        let possibleLeft = BST.ceil(key, currentNode.left);
        if (possibleLeft !== null) return possibleLeft;
        else return currentNode;
        }

    select(k){
    // find item with exactly k smaller items
        return BST.select(this.root, k).key;
    }

    static select(currentNode, k) {
        if (currentNode === null) return null;
        let nOfLeft;
        if (currentNode.left === null || currentNode.left === undefined) nOfLeft = 0;
        else nOfLeft = currentNode.left.N;
        if (nOfLeft > k) return BST.select(currentNode.left, k);
        else if (nOfLeft < k) return BST.select(currentNode.right, k - nOfLeft - 1);
        else return currentNode;
    }

    rank(key) {
        return BST.rank(key, this.root);
    }

    static rank(key, currentNode) {
        if (currentNode === null) return 0;
        if (key < currentNode.key) {
            return BST.rank(key, currentNode.left);
        } else if (key > currentNode.key) {
            if (currentNode.left === null || currentNode.left === undefined)
                return BST.rank(key, currentNode.right) + 1;
            else
                return currentNode.left.N + BST.rank(key, currentNode.right) +
                 1;
        } else {
            if (currentNode.left === null || currentNode.left === undefined) return 0;
            else return currentNode.left.N;
        }
    }

    deleteMin() {
        this.root = BST.deleteMin(this.root);
    }

    static deleteMin(currentNode) {
        if (currentNode.left === null || currentNode.left === undefined) {
            return currentNode.right;
        }
        currentNode.left = BST.deleteMin(currentNode.left);
        return currentNode;
        }



    delete(key) {
        this.root = BST.delete(key, this.root);
    }

    static delete(key, currentNode) {
        if (currentNode === null) return null;
        if (key > currentNode.key) {
            currentNode.right = BST.delete(key, currentNode.right);
        } else if (key < currentNode.key) {
            currentNode.left = BST.delete(key, currentNode.left);
        } else {
            if (currentNode.right === null) return currentNode.left;
            if (currentNode.left === null) return currentNode.right;
            let t = currentNode;
            currentNode = BST.min(currentNode.right);
            currentNode.right = BST.deleteMin(currentNode.right);
            currentNode.left = t.left;
        }
        currentNode.N = BST.size(currentNode.left) + BST.size(currentNode.right) + 1;
        return currentNode;
    }
}

// attempting to use ES5 syntax
BST.prototype.keys = function(lo, hi) {
    var rangeQueue = new Queue();
    BST.keys(this.root, rangeQueue, lo, hi);
    //console.log(rangeQueue);
    return rangeQueue.getQueue();
};

BST.keys = function(currentNode, queue, lo, hi) {
    if (currentNode === null) return;
    var loCompare = currentNode.compareToKey(lo);
    var hiCompare = currentNode.compareToKey(hi);

    if (loCompare > 0) {
        BST.keys(currentNode.left, queue, lo, hi);
    }
    if (loCompare >= 0 && hiCompare <= 0) {
        queue.enqueue(currentNode.key);
    }
    if (hiCompare < 0) BST.keys(currentNode.right, queue, lo, hi);
};


let counter = 1;
let myBST = new BST();
myBST.put('S', counter++);
myBST.put('E', counter++);
myBST.put('A', counter++);
myBST.put('R', counter++);
myBST.put('C', counter++);
myBST.put('H', counter++);
myBST.put('E', counter++);
myBST.put('X', counter++);
myBST.put('A', counter++);
myBST.put('M', counter++);
myBST.put('P', counter++);
myBST.put('L', counter++);
myBST.put('E', counter++);
//myBST.put('B', counter++);

console.log(myBST.keys(myBST.min().key,myBST.max().key));

// var myQueue = new Queue();
// myQueue.enqueue('hello');
// myQueue.enqueue('goodbye');
// console.log(myQueue.getLength());
// console.log(myQueue.getQueue());
