/*
Assignment-4
Create abstract class Service<T> with abstract method execute() .
Extend it with UserService

*/

abstract class Service<T>{
    abstract execute():T
}

class UserService extends Service<boolean>{
    execute() {
        //some operations
        return true;
    }
}

const obj = new UserService();
console.log(obj.execute())      //true