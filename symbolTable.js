class keyValue {
    constructor(key, value) {
        this.pair = {
            [key] : value
        };
    }
    myMethod() {
        return this.pair[key] * 5;
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
        for (let i = 0; i < this.st.length; i++) {
            console.log(this.st[i].toString());
        }
    }
}



let myST = new ST();

myST.add('Wu-Tang Clan', 'Don\'t fuck with.');
myST.add('G-Unit', 'Wack ass early 2000s gangster rap group.');
//myST.add('NWA', 'The father of gangsta rap.');
//myST.add('Wu-Tang Clan', 'From the streets of Shaolin');

myObject = new keyValue(5, 10);
console.log(myObject.myMethod());
//myST.print();
