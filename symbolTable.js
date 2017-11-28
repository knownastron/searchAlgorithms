class keyValue {
    constructor(key, value) {
        this.pair = {
            [key] : value
        };
    }
    toString() {
        console.log(this.pair);
    }
}

class ST {
    constructor() {
        this.st = [];
    }

    add(key, value) {
        let newPair = new keyValue(key, value);
        //console.log(newPair);
        this.st.push(newPair);
    }

    print() {
        let counter = 1;
        for (let i = 0; i < this.st.length; i++) {
            console.dir(this.st[i].toString());
        }
    }

    get(key) {
    }

    delete(key) {
    }

    contains(key) {
    }

    size() {
    }

}


let myST = new ST();

myST.add('Wu-Tang Clan', 'Don\'t fuck with.');
//myST.add('G-Unit', 'Wack ass early 2000s gangster rap group.');
//myST.add('NWA', 'The father of gangsta rap.');
//myST.add('Wu-Tang Clan', 'From the streets of Shaolin');

myObject = new keyValue('ya', 'what');
//console.log(myObject);
myST.print();
