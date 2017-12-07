const symbolTable = require('./symbolTable.js');
const help = require('./searchHelper');
/*
Binary Search Symbol Table with parallel arrays for keys and values
*/

class binarySearchST {
    constructor() {
        this.keys = [];
        this.vals = [];
        this.n = 0;
    }

    add(key, value) {
        let i = help.rank(this.keys, key, 0, this.n);
        if (i <= this.n && this.keys[i] === key) {
            this.vals[i] = value;
            return;
        }
        this.keys.splice(i, 0, key);
        this.vals.splice(i, 0, value);
        this.n++;
        }

    findMax() {
        let maxVal = [];
        for (let i = 0; i < this.n; i++) {
            if (maxVal.length === 0) {
                maxVal.unshift(i);
            } else if (this.vals[i] > maxVal[0]) {
                maxVal.unshift(i);
            }
        }
        return maxVal;
    }
}

let myBinarySearchST = new binSearchST();

let ZeroToOneText = "ya ya ya what ya ya ya no no no what what no";

ZeroToOneText.toUpperCase();
let ZeroToOneArray = ZeroToOneText.split(' ');
for (let i = 0; i < ZeroToOneArray.length; i++) {
    myBinSearchST.add(ZeroToOneArray[i].toLowerCase(), 1);
}

let maxArr = myBinarySearchST.findMax();
let maxOne = maxArr[0];
let maxTwo = maxArr[1];
let maxThree = maxArr[2];
console.log(ZeroToOneArray[maxOne], myBinSearchST.vals[maxOne]);
