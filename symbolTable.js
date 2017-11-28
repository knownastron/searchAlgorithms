class ST {
    constructor() {
        this.table = new Map();
    }

    add(key, value) {
        this.table.set(key, value);
    }

    print() {
        console.log(this.table);
    }

    get(key) {
        return this.table.get(key);
    }

    delete(key) {
        this.table.delete(key);
    }
}


let myST = new ST();

myST.add('Wu-Tang Clan', 'Don\'t fuck with.');
myST.add('G-Unit', 'Wack ass early 2000s gangster rap group.');
myST.add('NWA', 'The father of gangsta rap.');

myST.print();
myST.delete('G-Unit');
myST.print();
