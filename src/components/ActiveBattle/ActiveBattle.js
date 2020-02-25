import Axios from 'axios'
import React, { Component } from 'react'
import Battle from './Battle';
import SwitchPoke from './SwitchPoke';
import Attacks from './Attacks';
import BattleScreen from './BattleScreen';
import ReactModal from 'react-modal'
import { NavLink } from 'react-router-dom'



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
        isActive: true,
        showModal: true

    }



    componentDidMount() {
        const battID = "5e5395b1e254620017eba050";
        Axios.get(`https://pokebattles12.herokuapp.com/battle/${battID}`)
            .then(res => {
                this.setState({ battle: res.data });
                for (let i = 1; i < 727; i++) {
                    const url = `https://pokeapi.co/api/v2/move/${i}`
                    Axios.get(url)
                        .then(res => this.setState({ attacks: [...this.state.attacks, res.data], waiting: false }))
                }
            })
            .catch(res => console.log(res));





    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }


    clickAttack = (attack) => {
        Axios.get(`https://pokeapi.co/api/v2/move/${attack}`)
            .then(res => { this.setState({ exampleAttack: res.data, exampleType: res.data.type.name, damageClass: res.data.damage_class.name }); this.calculateAttack(); })

        setInterval(() => {
            this.setState({ isActive: false });
        }, 50);


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
        // const battID = "5e5395b1e254620017eba050";

        let battle = this.state.battle;
        let hero;
        if (this.state.hero === "player1")
            hero = battle.player1;
        else
            hero = battle.player2;

        let enemy
        if (this.state.enemy === "player1")
            enemy = battle.player1;
        else
            enemy = battle.player2;

        const damageMulti = enemy[this.state.activeEnemy].weakness[this.state.exampleType];
        let damage = this.state.exampleAttack.power * damageMulti;
        if (this.state.damageClass === "physical") {
            damage = Math.ceil((damage / enemy[this.state.activeEnemy].stats.defense * hero[this.state.activeHero].stats.attack / 2))

        }
        else if (this.state.damageClass === "special") {
            damage = Math.ceil(damage / enemy[this.state.activeEnemy].stats.spDefense * hero[this.state.activeHero].stats.spAttack / 2);
        }
        const randNum = Math.floor(Math.random() * Math.floor(100));

        if (randNum <= this.state.exampleAttack.accuracy) {
            let newHp = enemy[this.state.activeEnemy].hp.current - damage;
            if (newHp < 0)
                newHp = 0;
            enemy[this.state.activeEnemy].hp.current = newHp;
            this.setState({ battle });
            // Axios.put(`https://pokebattles12.herokuapp.com/battle/hp/${battID}`, this.state.battle);
            // .then(socket.emit('', {}))
        }


        console.log(damage);

    }


    renderWaitForPlayer() {
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
        return (
            <div className="ml-1 flex-wrap">
                <div className="d-flex justify-content-center align-content-end">
                    <BattleScreen></BattleScreen>
                    <Battle enemy={enemy} hero={hero} activeHero={this.state.activeHero} activeEnemy={this.state.activeEnemy}></Battle>
                    <div style={waitStyle}>Waiting for other player</div>
                </div>
            </div>
        )
    }

    renderUI() {
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


        return (
            <div className="ml-1 flex-wrap justify-content-center pb-5">
                <div className="container d-flex justify-content-center m-auto">
                    <BattleScreen></BattleScreen>
                    <Battle enemy={enemy} hero={hero} activeHero={this.state.activeHero} activeEnemy={this.state.activeEnemy}></Battle>
                </div>
                <div className="col">
                    <div className="row" style={titleStyle} >Attack</div>
                    <Attacks waiting={this.state.waiting} attacks={this.state.attacks} battle={this.state.battle} click={this.clickAttack} activeHero={this.state.activeHero}></Attacks>
                    <div className="row" style={titleStyle}>Switch Pokemon</div>
                    <SwitchPoke hero={hero} switch={this.switchPokemon}></SwitchPoke>
                </div>
            </div>
        )
    }


    render() {
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


        if (this.state.waiting)
            return this.renderSpinner()
        else if (enemy[0].hp.current === 0 && enemy[1].hp.current === 0 && enemy[2].hp.current === 0) {
            return (
                <div className="ml-1 flex-wrap justify-content-center pb-5">

                    <div className="row justify-content-center wonText" data-shadow='YOU WON!'>YOU WON</div>
                    <div className="row justify-content-center" >
                        <NavLink exact to="/" style={liStyle} activeStyle={this.active}>Return to Home</NavLink>
                    </div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Win Modal"
                    >
                        <div className="container d-flex justify-content-center flex-wrap m-auto">
                            <div className="row w-100">
                                <img src="https://pbs.twimg.com/media/EJaw6yWW4AEe4XO.jpg" alt="win"></img>
                            </div>
                            <div className="row w-100 justify-content-center">
                                <button onClick={this.handleCloseModal}>Close Window</button>
                            </div>
                        </div>
                    </ReactModal>
                </div>
            );
        }

        

        else if (hero[0].hp.current === 0 && hero[1].hp.current === 0 && hero[2].hp.current === 0) {
            return (
                <div className="ml-1 flex-wrap justify-content-center pb-5">

                    <div className="row justify-content-center">YOU LOSE</div>
                    <div className="row justify-content-center" >
                        <NavLink exact to="/" style={liStyle} activeStyle={this.active}>Return to Home</NavLink>
                    </div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Lose Modal"
                    >
                         <div className="container d-flex justify-content-center flex-wrap m-auto">
                            <div className="row w-100">
                                <img src="https://cms.kotaku.co.uk/wp-content/uploads/2019/06/l4idvmh43lukhcip4rdh.jpg" alt="win"></img>
                            </div>
                            <div className="row w-100 justify-content-center">
                                <button onClick={this.handleCloseModal}>Close Window</button>
                            </div>
                        </div>
                    </ReactModal>
                </div>
            );

        }

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

const waitStyle = {
    fontFamily: "Montserrat",
    fontSize: "38px",
    color: "#FE5266",
    letterSpacing: "0.5px",
    paddingLeft: "5vw",
    float: "left",
    textAlign: "center",
    bottom: "50px"
}

const liStyle = {
    color: "#B8B8B8",
    fontFamily: "Montserrat",
    fontSize: "14px",
    letterSpacing: "0.5px",
    textDecoration: "none"
}


export default ActiveBattle
