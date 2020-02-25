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
        activeHero: 2,
        activeEnemy: 2,
        switchOptions: [],
        attacks: [],
        exampleAttack: {},
        exampleType: '',
        damageClass: '',
        hero: "player1",
        enemy: "player2",
        isActive: true

    }

    componentDidMount() {
        const battID = "5e5395b1e254620017eba050";
        Axios.get(`https://pokebattles12.herokuapp.com/battle/${battID}`)
            .then(res => { this.setState({ battle: res.data, waiting: false }) })
            .catch(res => console.log(res));

        for (let i = 1; i < 727; i++) {
            const url = `https://pokeapi.co/api/v2/move/${i}`
            Axios.get(url)
                .then(res => this.setState({ attacks: [...this.state.attacks, res.data] }))
        }

        // TEST ATTACKS
   

      //  const player = `this.battle.${this.state.player}[${activeHero}]`;
        

    }

    clickAttack = (attack) =>{
       Axios.get(`https://pokeapi.co/api/v2/move/${attack}`)
       .then(res => {this.setState({ exampleAttack: res.data , exampleType: res.data.type.name, damageClass: res.data.damage_class.name});  this.calculateAttack();})  
    
        // setInterval(function(){ 
        //     this.setState({isActive : false});
        //  }, 1000);
       

    }

    renderSpinner() {
        return (
            <div className="d-flex justify-content-center">
                <div className="pokemonSpinner"></div>
            </div>
        )
    }

    switchPokemon = (activePoke) => {
        this.setState({ activeHero: activePoke });
    }

    calculateAttack = () => {
        let hero;
        if (this.state.hero === "player1")
             hero = this.state.battle.player1;
        else
            hero = this.state.battle.player2;

        let enemy
        if (this.state.enemy === "player1")
            enemy = this.state.battle.player1;
        else
            enemy = this.state.battle.player2;
        
        const damageMulti = enemy[this.state.activeEnemy].weakness[this.state.exampleType];
        let damage = this.state.exampleAttack.power * damageMulti;
        if(this.state.damageClass === "physical"){
            damage = Math.ceil((damage / enemy[this.state.activeEnemy].stats.defense * hero[this.state.activeHero].stats.attack/2))
            
        }
        else if(this.state.damageClass === "special"){
           damage =  Math.ceil(damage / enemy[this.state.activeEnemy].stats.spDefense * hero[this.state.activeHero].stats.spAttack/2);
        }
        const randNum = Math.floor(Math.random() * Math.floor(100));
        let accuracy;
        if(randNum <= this.state.exampleAttack.accuracy)
            accuracy = 1;
        else    
            accuracy = 0;

            console.log(damage);
        const dataToSend = [accuracy, damage];
        return dataToSend;

    }

    // calculateAttack = (attack, type, attClass, accu) => {
        
    //     let hero;
    //     if (this.state.hero === "player1")
    //          hero = this.state.battle.player1;
    //     else
    //         hero = this.state.battle.player2;

    //     let enemy
    //     if (this.state.enemy === "player1")
    //         enemy = this.state.battle.player1;
    //     else
    //         enemy = this.state.battle.player2;
        
    //     const damageMulti = enemy[this.state.activeEnemy].weakness[type];
    //     let damage = attack * damageMulti;
    //     if(attClass === "physical"){
    //         damage = Math.ceil(damage / enemy[this.state.activeEnemy].stats.defense * hero[this.state.activeHero].stats.attack) 
    //     }
    //     else if(attClass === "special"){
    //         damage = Math.ciel(damage / enemy[this.state.activeEnemy].stats.spDefense * hero[this.state.activeHero].stats.spAttack) 
    //     }
    //     const randNum = Math.floor(Math.random() * Math.floor(100));
    //     let accuracy;
    //     if(randNum <= accu)
    //         accuracy = 1;
    //     else    
    //         accuracy = 0;

    //         console.log(damage);
    //     const dataToSend = [accuracy, damage];
    //     return dataToSend;

    // }

    renderWaitForPlayer(){
        return(
            <div className = "ml-1 flex-wrap">
                <div className="d-flex justify-content-center align-content-center">
                <BattleScreen></BattleScreen>
                <Battle battle={this.state.battle} activeHero={this.state.activeHero}></Battle>
                    <div style={titleStyle}>Waiting for other player</div>
                </div>
            </div>
        )
    }

    renderUI() {
        
        return (
            <div className="ml-1 flex-wrap justify-content-center pb-5">
                <div className="container d-flex justify-content-center m-auto">
                    <BattleScreen></BattleScreen>
                    <Battle battle={this.state.battle} enemy={this.state.enemy} hero={this.state.hero} activeHero={this.state.activeHero} activeEnemy = {this.state.activeEnemy}></Battle>
                </div>
                <div className="col">
                    <div className="row" style={titleStyle} >Attack</div>
                    <Attacks attacks={this.state.attacks} battle={this.state.battle} click={this.clickAttack} activeHero={this.state.activeHero}></Attacks>
                    <div className="row" style={titleStyle}>Switch Pokemon</div>
                    <SwitchPoke battle={this.state.battle}  switch={this.switchPokemon}></SwitchPoke>
                </div>
            </div>
        )
    }


    render() {
        if(this.state.waiting)
        return this.renderSpinner()
        else
        return this.state.isActive ? this.renderUI() : this.renderWaitForPlayer();
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
