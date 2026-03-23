import { useState } from "react";

/* useState 

first check if the local storage already have this value
if not then we will store the value in the local storage 

*/
const [value, setValue] = useState(() => {

   const stored = localStorage.getItem(key)

   if(stored){
      return JSON.parse(stored)
   }

   return initialValue

})


//----------------------------- useLocalStorage -------------------------------------------------

function useLocalStorage(key, initialValue){

   const [value, setValue] = useState(() => {

      const stored = localStorage.getItem(key)

      if(stored){
         return JSON.parse(stored)
      }

      return initialValue

   })

   //When we want to store the data into the local storage after the component mount

   useEffect(() => {

      localStorage.setItem(key, JSON.stringify(value))

   }, [key, value])

   return [value, setValue]

}

const Form = () => {
    const [form, setForm] = useState();
    return (
        
        <div className="form">
        <label>Name:</label>
        <input type="text" name="Name" value={form.name} required/>
        <hr />
        <label>Aadhar Card Number:</label>
        <input type="text" name="aadhar" value={form.aadhar} required/>
        <label>Email:</label>
        <label>Gender:</label>
        <label>Male</label>
        <input type="radio" name="gender" value="" />

        <label>Female</label>
        <input type="radio" name="gender" value="male" />


        <input type="email" name="email" value={form.email} required/>
        <label>Password:</label>
        <input type="password" name="password" value={form.password} required/>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} required/>
        
        </div>
    )
};

export default Form;