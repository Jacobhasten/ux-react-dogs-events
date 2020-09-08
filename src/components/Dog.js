// Dog.js
import React from "react";

function Dog(props) {
  const handlePetDog = () => {
    alert("You Pet " + props.dog.name);
  }
  return <div>
    {props.dog.name}
    <button onClick={handlePetDog}>Pet me</button>
    </div>;
}

export default Dog;
