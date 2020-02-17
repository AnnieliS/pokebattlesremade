import React, { Component } from 'react'
import {Pokemon} from './Pokemon'

export class AllPokemon extends Component {
    render() {
        return (
            <div className="container flexContainer">
                {this.props.pokemons.map((poke)=> (
                    <Pokemon key={poke._id} poke={poke} choose={this.props.choose} deChoose = {this.props.deChoose}></Pokemon>
                ))
    }
            </div>
        )
    }
}

export default AllPokemon
