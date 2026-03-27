/*

Assignment 9: Access Modifiers

Tasks:
1. Create a service class exposing only required public methods
2. Keep internal data private
3. Explain which members should be accessible and why
4. Create a class with public, private, and protected members
5. Try accessing them outside the class
6. Which members should be exposed and why?

*/

class Service {
    private id: number;
    public name: string;
    protected enrollment: number;

    // Correct constructor
    constructor(id: number, name: string, enrollment: number) {
        this.id = id;
        this.name = name;
        this.enrollment = enrollment;
    }

    // Public method to expose limited data
    public getServiceInfo(): void {
        console.log("Service: ", this.name, "Enrollment: ", this.enrollment);
    }

    // Public controlled access to private data
    public getId(): number {
        return this.id;
    }
}


//3. Which members should be accessible and why?

/*
- Private members:
  Used for internal data that should not be changed directly.
  Example: id should be private.

- Public members:
  Methods or properties that other parts of the app must use.

- Protected members:
  Accessible in subclasses but hidden from outside code.
*/

class Example {
    public publicValue: number = 10;
    private privateValue: number = 20;
    protected protectedValue: number = 30;

    public showValues() {
        console.log(
            this.publicValue,
            this.privateValue,
            this.protectedValue
        );
    }
}


//5. Accessing outside the class

let obj1 = new Example();

console.log(obj1.publicValue);   //  Allowed

// console.log(obj.privateValue);    Error
// console.log(obj.protectedValue);  Error



//6. Which members should be exposed and why?

/*
Expose only what is necessary.

Public:
- Methods used by other parts of the program.

Private:
- Internal logic/data that must be protected.

Protected:
- Data needed by subclasses but not outside users.

*/
