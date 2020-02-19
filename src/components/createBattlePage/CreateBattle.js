import React, { Component } from 'react'
import {ChosenList} from './ChosenList'
import {AllPokemon} from './AllPokemon'
import {Handicap} from './Handicap'
import {FaChevronCircleLeft} from 'react-icons/fa'
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
        if (chosen.length < 3)
        chosen.push(this.state.pokemons.filter( poke => poke._id === id));
        this.setState({chosen})
    }

    deChoose = (id) => {
        this.setState({chosen: [...this.state.chosen.filter(poke => poke[0]._id !== id)]})
    }


    render() {
        return (
            <div className="container ml-1">
                <div className="row">
                    <div className=" d-flex float-left" style={backBlock}></div>
                </div>

            <div className="row d-flex justify-content-start ml-5 mt-3">
            <FaChevronCircleLeft style={arrowStyle} className="my-auto m-3"/><h1 style={titleStyle}>Create New Battle</h1>
            </div>

            <div className="row d-flex justify-content-center">
                <Handicap></Handicap>
            </div>
            
            <div className="row d-flex justify-content-center">
                <ChosenList chosen={this.state.chosen} deChoose = {this.deChoose}></ChosenList>
            </div>
            
            <div className="row">
                <AllPokemon pokemons={this.state.pokemons} choose = {this.Choose}></AllPokemon>
            </div>
            </div>
        )
    }
}

const backBlock = {
    width: "100vw",
    height: "358px",
    zIndex: "-1",
    position: "absolute",
    top: "0",
    backgroundImage: "linear-gradient(90deg, #e00727, #f0e181)",
}

const titleStyle = {
    fontFamily: "Montserrat",
    fontSize: "50px",
    color: "#FFF",
    letterSpacing: "0"
}

const arrowStyle = {
    fontFamily: "Montserrat",
    fontSize: "28px",
    color: "#FFF",
    letterSpacing: "0",
    opacity: "0.7"
}



const red = {
    backgroundColor: "red"
}


export default CreateBattle
