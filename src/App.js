import React, { Component } from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    dogs: [
      {
        name: "Scruffles",
      },
      {
        name: "Snarf",
      },
      {
        name: "Wookie",
      },
    ],
    newDogName: "",
  };
  handleNewDogChange = (event) =>{
    this.setState({newDogName: event.target.value})
  };

  handleAdoptDog = (event) => {
    this.setState(state=>{
      return{
        dogs: [...state.dogs, {name: state.newDogName}],
        newDogName: ""
      }
    })
  };

  keyPressed = ((event) => {
    if (event.key === "Enter") {
      this.handleAdoptDog()
    }});


  render() {
    return (
      <div className="app">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <ul className="dogList">
          {this.state.dogs.map((dog, index) => (
            <li key={index}>
              <Dog dog={dog} />
            </li>
          ))}
        </ul>
        <br />
        <input type="text" 
        onChange={this.handleNewDogChange}
        value={this.state.newDogName}
        onKeyPress={this.keyPressed}/>
        <button onClick={this.handleAdoptDog}>Adopt Dog</button>
      </div>
    );
  }
}

export default App;
