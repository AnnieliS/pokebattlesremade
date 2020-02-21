import Axios from 'axios'
import React, { Component } from 'react'
import Battle from './Battle';
import SwitchPoke from './SwitchPoke';
import Attacks from './Attacks';


export class ActiveBattle extends Component {
    state = {
        waiting: true,
        battle: [],
        activePokemon: 0,
        switchOptions: [],
        attacks: []
    }

    componentDidMount() {
        const battID = "5e4ef5c3b210de00170afdd0";
        Axios.get(`https://pokebattles12.herokuapp.com/battle/read/${battID}`)
            .then(res => { this.setState({ battle: res.data, waiting: false }) })
            .catch(res => console.log(res));


        for(let i = 1; i < 727 ; i++){
        const url = `https://pokeapi.co/api/v2/move/${i}`
        Axios.get(url)
        .then(res => this.setState({attacks : [...this.state.attacks, res.data]}))
        }
    }

    renderSpinner() {
        return ( 
        <div className="d-flex justify-content-center">
        <div className="pokemonSpinner"></div>
        </div>
        )
    }

switchPokemon = (activePoke) => {
    this.setState({activePokemon : activePoke});
}


    renderUI() {
        return (
            <div className="ml-1 flex-wrap">
                <div className="container d-flex justify-content-center">
                    <Battle battle={this.state.battle} activePokemon = {this.state.activePokemon}></Battle>
                </div>
                <div className="col">
                <div className="row" style = {titleStyle} >Attack</div>
                        <Attacks attacks={this.state.attacks} battle={this.state.battle} activePokemon={this.state.activePokemon}></Attacks>
                    <div className="row" style = {titleStyle}>Switch Pokemon</div>
                    <SwitchPoke battle={this.state.battle} switch={SwitchPoke}></SwitchPoke>
                </div>
            </div>
        )
    }


    render() {
        return this.state.waiting ? this.renderSpinner() : this.renderUI();
    }
}


const titleStyle = {
        fontFamily: "Montserrat",
        fontSize: "38px",
        color: "#FE5266",
        letterSpacing: "0.5px",
        paddingLeft: "5vw"
}

export default ActiveBattle
