import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Pokemon from './pokemon'


class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [
        {
          id: 0,
          img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
          name: "ditto"
        }
      ]
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() { //this is the logic behind the axios.get and using slice to make copy
    // and push to add data to copy of array
    let num = 151;
    for (let i = 1; i <= num; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(pokemon => {
        let {id,name,sprites} = pokemon.data
        let newCopyCharacters = this.state.characters.slice()
        newCopyCharacters.push({id:id,name,img:sprites.front_shiny})
        this.setState({characters:newCopyCharacters})
      });
    }
  }

  render() {
    // console.log(this.state.characters)
    let sorted = this.state.characters.sort((a,b)=>a.id - b.id)
    //this is sorting the array by id 

//    this.state.characters is changed to sorted due to new var
    return (
      <div className="App">
        <h1>Hello World!</h1>
        {sorted.map(pokemon => {
          return(
            <Pokemon pokemon = {pokemon}/>
          )
        })}
      </div>
    );
  }
}

export default App;
