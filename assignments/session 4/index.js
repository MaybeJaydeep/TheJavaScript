//1. Predict the output and explain the memory state.
const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // 2
console.log(registry.active[0].name); // Gamma
console.log(registry.version);       // undefined

/*

{ ...data } performs a shallow copy

copy.active and registry.active point to the same array in heap

push() mutates that shared array

Changing copy.active[0].name mutates the shared object

version is a new primitive, added only to copy




-------------------------------------------------------------------------------------------------------------------


2. Identify why the following code throws an error and fix it without using the class keyword.
*/ 

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Animal.prototype; 

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // It already exists, Why does this happen? 

console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?
/*
Dog and Animal now share the same prototype object

Adding bark() to Dog.prototype also adds it to Animal.prototype

Constructor reference is overwritten

correction:
*/
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};




/*
--------------------------------------------------------------------------------------------------------

 3. Predict the result of the following execution.
 */
function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // Generic
console.log(myPhone.getBrand); // TypeError: myPhone.getBrand is not a function


/*
-----------------------------------------------------------------------------------------------------------------------------

4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
Requirements:
It must handle nested objects.
It must handle nested arrays.
It must not copy functions by reference (they can remain shared, but the object structure must be unique).
 

*/

function masterClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => masterClone(item));
  }

  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = masterClone(obj[key]);
    }
  }

  return clone;
}


/*
-------------------------------------------------------------------------------------------------------------------------------------

5. Trace the execution of this class logic.
*/


class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // 10
console.log(Counter.getStaticCount()); // 2
console.log(c1.getStaticCount());  // error objects cant call static methods


//------------------------------------------------------------------------------------------------------------------------------------------