const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();   // undefined

/*

Arrow functions do not bind (this).
They inherit outer scope (this), not object.

*/
