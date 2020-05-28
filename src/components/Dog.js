// Dog.js
import React from "react";

function Dog(props) {
  const handleClick = () => alert(`You pet ${props.dog.name}`)
  return <div>
    <p>{props.dog.name}</p>
    <button onClick={handleClick}>Pet this Dog</button>
    </div>;
}

export default Dog;

//Now add a button to the Dog component to pet the dog.
 
// Create a method, and wire it up to the button’s onClick.  
 
// This button should trigger an alert like,  alert("You pet scruffles!")
// Use the dog’s name from the props object.
 
// light bulb Hint: All of the code for this should be inside the Dog component.