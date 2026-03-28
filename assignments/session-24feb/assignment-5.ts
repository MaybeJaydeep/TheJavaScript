/*

Assignment 5
Create a constructor type for UserRepository .
Create a callable type that formats User name.

*/
interface User {
  id: string;
  name: string;
  email: string;
}

class UserRepository {
  constructor() {}

  findUser(id: string) {
    return { id, name: "Jaydeep" };
  }
}

type UserRepositoryConstructor = new () => UserRepository;


type UserNameFormatter = (user: User) => string;

const formatUserName: UserNameFormatter = (user) => {
  return `User: ${user.name}`;
};

console.log(formatUserName)    
/* (user) => {
    return `User: ${user.name}`;
}*/