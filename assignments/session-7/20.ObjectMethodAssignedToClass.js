class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();


/*

output:
Sarah

Explanation:
Arrow method binds instance this.
Even if extracted, context stays.

*/