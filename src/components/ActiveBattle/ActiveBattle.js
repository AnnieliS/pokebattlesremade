import Axios from 'axios'
import React, { Component } from 'react'
import Battle from './Battle';

export class ActiveBattle extends Component {
    state = {
        waiting: true,
        battle: [],
        activePokemon: 0
    }

    componentDidMount() {
        console.log("entered mounting");
        Axios.get('https://pokebattles12.herokuapp.com/battle/read/5e3001f02a7ae400173967fe')
            .then(res => { this.setState({ battle: res.data, waiting: false }) })
            .catch(res => console.log(res));
    }

    renderSpinner() {
        return (
            <div className="pokemonSpinner"></div>
        )
    }



    renderUI() {
        return (
            <div className="ml-1 flex-wrap">
                <div className="container">
                    <Battle battle={this.state.battle} activePokemon = {this.state.activePokemon}></Battle>
                </div>
                <div className="col">
                <div className="row" style = {titleStyle}>Attack</div>
                        <div className="row">
                            
                            <div className="col">
                                <span>Attack</span>
                            </div>
                            <div className="col">
                                <span>Attack</span>
                            </div>
                            <div className="col">
                                <span>Attack</span>
                            </div>
                            <div className="col">
                                <span>Attack</span>
                            </div>
                    </div>
                    <div className="row" style = {titleStyle}>Switch Pokemon</div>
                    <div className="row">
                       <div className = "col">
                           <span>Pokemon</span>
                       </div>
                       <div className = "col">
                           <span>Pokemon</span>
                       </div>
                    </div>
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
