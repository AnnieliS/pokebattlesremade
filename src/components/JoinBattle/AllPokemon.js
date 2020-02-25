import React, {Component} from 'react'
import { Pokemon } from './Pokemon'


export class AllPokemon extends Component {
    render() {
            const h = this.props.handi;
            let pokeFilter = [];
            if(h === "All")
                pokeFilter = this.props.pokemons;
          else if(h === "bug" || h === "dark" || h === "electric" ||  h === "dragon" || h === "fairy " || h === "fighting" || h === "fire" || h === "flying" || h === "ghost" || h === "grass" || h === "ground" || h === "ice" || h === "normal" || h === "poison" || h === "psychic" || h === "rock" || h === "steel" || h === "water")
            pokeFilter = this.props.pokemons.filter(poke => (poke.type1 === h || poke.type2 === h))
            else if(h === "small")
            pokeFilter = this.props.pokemons.filter(poke => (poke.height_m < 1))
            else if(h === "big")
            pokeFilter = this.props.pokemons.filter(poke => (poke.height_m > 2))
            else if(h === "heavy")
            pokeFilter = this.props.pokemons.filter(poke => (poke.weight_kg > 150))
            else if(h === "1" || h === "2" || h === "3" || h === "4" || h === "5")    
            pokeFilter = this.props.pokemons.filter(poke => (poke.generation === parseInt(h)));


    if (this.props.loading) {
        return (
            <div className="d-flex container justify-content-center">
            <div className="pokemonSpinner"></div>
            </div>
        )
    }
        return (
            <div className="container d-flex justify-content-around flex-wrap">
                {pokeFilter.map((poke)=> (
                    <Pokemon key={poke._id} poke={poke} choose={this.props.choose} deChoose = {this.props.deChoose}></Pokemon>
                ))
    }
            </div>
        )
    }
}


export default AllPokemon
