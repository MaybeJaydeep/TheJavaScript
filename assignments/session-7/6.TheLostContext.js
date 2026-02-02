const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();

/*

print() have copy of function printName() which have (this) undefined
because print() is not a part of user object and dont have "name" variable 

*/
