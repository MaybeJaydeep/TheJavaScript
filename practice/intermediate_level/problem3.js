/*
Objective
Fetch data from an API and transform it using modern JavaScript array methods.
Input
Assume the API returns the following data:
[
  { id: 1, name: "Amit", active: true },
  { id: 2, name: "Neha", active: false }
]

Requirements
Fetch data using fetch


Handle API failure gracefully


Filter only active users


Transform data into the format:

{ userId: 1, userName: "Amit" }

Expected Output
[
  { userId: 1, userName: "Amit" }
]

-----------------------------------------------------------------------------------
*/

// for developing logic of function
async function getActiveUsers(){

  try{
      const data = [
        { id: 1, name: "Neil", active: true },
        { id: 2, name: "Hanshil", active: false },
        { id: 3, name: "Jaydeep", active: true }
      ]

      result = data
              .filter(user => user.active)
              .map(user =>({
                userId : user.id,
                userName : user.name
                })  
              )

        console.log(result)
        return result;

    }catch(Error){

    }
    return []
}

getActiveUsers();

/*
-----------------------------------------------------------------------------------------
fetching data from url 
*/

async function getActiveUsers1() {

  const URL = "https://jaydeep-badal.com/user"

  try{

    const response = await fetch(URL)

    if(!response.ok){
      throw new Error("Bad http request")
    }

    const data = await response.json()
    
    const results = data
            .filter(user => active)
            .map(user => ({
              userId: user.id,
              userName: user.name
            }));

      console.log(results);
      return results;

  }catch(Error){
      console.error("Failed to fetch users:", Error.message);
  }
  return [] 
}

getActiveUsers1();