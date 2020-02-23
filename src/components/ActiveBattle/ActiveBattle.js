import Axios from 'axios'
import React, { Component } from 'react'
import Battle from './Battle';
import SwitchPoke from './SwitchPoke';
import Attacks from './Attacks';
import BattleScreen from './BattleScreen';


export class ActiveBattle extends Component {
    state = {
        waiting: true,
        battle: [],
        activePokemon: 2,
        switchOptions: [],
        attacks: [],
        exampleAttack: {},
        exampleType: '',
        player: 'player1'

    }

    componentDidMount() {
        const battID = "5e521d854ea2300017680221";
        Axios.get(`https://pokebattles12.herokuapp.com/battle/read/${battID}`)
            .then(res => { this.setState({ battle: res.data, waiting: false }) })
            .catch(res => console.log(res));

        for (let i = 1; i < 727; i++) {
            const url = `https://pokeapi.co/api/v2/move/${i}`
            Axios.get(url)
                .then(res => this.setState({ attacks: [...this.state.attacks, res.data] }))
        }

        // TEST ATTACKS
        const attackedBy = "thunder"
        Axios.get(`https://pokeapi.co/api/v2/move/${attackedBy}`).then(res => this.setState({ exampleAttack: res.data , exampleType: res.data.type.name}))

      //  const player = `this.battle.${this.state.player}[${activePokemon}]`;
        

    }

    renderSpinner() {
        return (
            <div className="d-flex justify-content-center">
                <div className="pokemonSpinner"></div>
            </div>
        )
    }

    switchPokemon = (activePoke) => {
        this.setState({ activePokemon: activePoke });
    }

    calculateAttack = () => {
        const damageMulti = this.state.battle.player1[this.state.activePokemon].weakness[this.state.exampleType];
        ///const damageMulti = player.weakness[this.state.exampleType];
        const damage = this.state.exampleAttack.power * damageMulti;
        const randNum = Math.floor(Math.random() * Math.floor(100));
        console.log(randNum);
        let accuracy;
        if(randNum <= this.state.exampleAttack.accuracy)
            accuracy = 1;
        else    
            accuracy = 0;

        console.log("accuracy: " + accuracy);
        console.log("   damage: " + damage);

    }

    renderUI() {
        this.calculateAttack();
        return (
            <div className="ml-1 flex-wrap">
                <div className="container d-flex justify-content-center">
                    <BattleScreen></BattleScreen>
                    <Battle battle={this.state.battle} activePokemon={this.state.activePokemon}></Battle>
                </div>
                <div className="col">
                    <div className="row" style={titleStyle} >Attack</div>
                    <Attacks attacks={this.state.attacks} battle={this.state.battle} activePokemon={this.state.activePokemon}></Attacks>
                    <div className="row" style={titleStyle}>Switch Pokemon</div>
                    <SwitchPoke battle={this.state.battle} switch={this.switchPokemon}></SwitchPoke>
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
