import React, { Component } from 'react'

export class Battle extends Component {
   

    render() {
        return (
            <div className="gameboy ml-4 mt-4" id="GameBoy">

            <div className="screen-area">

                <div className="power">
                    <div className="indicator">
                        <div className="led"></div>
                        <span className="arc" style={{ zIndex: "2" }}></span>
                        <span className="arc" style={{ zIndex: "1" }}></span>
                        <span className="arc" style={{ zIndex: "0" }}></span>
                    </div>
                    POWER
               </div>


                <div className="d-flex">
                <div className="canvas container d-flex flex-wrap justify-content-between">
                    <div className = "row-12" style= {{width: "100%"}}>
                    <img src={this.props.battle.player2[2].img.front} alt={this.props.battle.player2[2].name} style={player2PokemonStyle}></img>
                    </div>
                    <div className="row-12" style= {{width: "100%"}}>
                    <img src={this.props.battle.player1[this.props.activePokemon].img.back} alt={this.props.battle.player1[0].name} style={player1PokemonStyle}></img>
                    </div>
                    </div>
                </div>
                <div className="label">
                    <div className="title">GAME BOY</div>
                    <div className="subtitle">
                        <span className="c">C</span>
                        <span className="o1">O</span>
                        <span className="l">L</span>
                        <span className="o2">O</span>
                        <span className="r">R</span>
                    </div>
                </div>

            </div>

            <div className="nintendo">Nintendo</div>

            <div className="controls">
                <div className="dpad">
                    <div className="up"><i className="fa fa-caret-up"></i></div>
                    <div className="right"><i className="fa fa-caret-right"></i></div>
                    <div className="down"><i className="fa fa-caret-down"></i></div>
                    <div className="left"><i className="fa fa-caret-left"></i></div>
                    <div className="middle"></div>
                </div>
                <div className="a-b">
                    <div className="b">B</div>
                    <div className="a">A</div>
                </div>
            </div>

            <div className="start-select">
                <div className="select">SELECT</div>
                <div className="start">START</div>
            </div>

            <div className="speaker">
                <div className="dot placeholder"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot placeholder"></div>

                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>

                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>

                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>

                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>

                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>

                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>

                <div className="dot placeholder"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot closed"></div>
                <div className="dot open"></div>
                <div className="dot placeholder"></div>
            </div>

        </div>

        )
    }
}


const player1PokemonStyle = {
    float: "left",
    zIndex: '9999'
}

const player2PokemonStyle = {
    float: "right",
    right:"0",
    zIndex: '9999'
}



export default Battle
