import React from "react"
import ReactDOM from "react-dom/client"


const Heading = () => <div className="heading">Hello I am in React App now</div>;


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);