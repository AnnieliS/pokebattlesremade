import React, { Component } from 'react'
import {ChosenPokemon} from './ChosenPokemon'
import {AllPokemon} from './AllPokemon'
import {Handicap} from './Handicap'
import Axios from 'axios';





export class CreateBattle extends Component {
    state = {
        pokemons: [],
        chosen: []
    }

    componentDidMount(){
    Axios.get('https://pokebattles12.herokuapp.com/pokemons/read')
    .then(res => this.setState({pokemons : res.data}))
    .catch(res => console.log(res));
    }

    Choose = (id) =>{
        let chosen = this.state.chosen;
        if (chosen < 3)
        chosen.push(this.state.pokemons.filter(poke => poke._id === id));
        this.setState({chosen})
    }


    render() {
        return (
            <div col-9>
            <div className="row">
                <Handicap></Handicap>
            </div>
            
            <div className="row">
                <ChosenPokemon chosen={this.state.chosen}></ChosenPokemon>
            </div>
            
            <div className="row">
                <AllPokemon pokemons={this.state.pokemons} choose = {this.Choose}></AllPokemon>
            </div>
            </div>
        )
    }
}

export default CreateBattle
