import React, { Component } from 'react'

export class Battle extends Component {


    render() {

      //  console.log(this.props.hero[this.props.activeHero]);

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
                            <div className="row-12" style={{ width: "100%" }}>
                                <img src={this.props.enemy[this.props.activeEnemy].img.front} alt={this.props.enemy[this.props.activeEnemy].name} style={player2PokemonStyle}></img>
                                <div style={hpStyle}>{this.props.enemy[this.props.activeEnemy].hp.current}/{this.props.enemy[this.props.activeEnemy].hp.total}</div>
                            </div>
                            <div className="row-12" style={{ width: "100%" }}>
                                <img src={this.props.hero[this.props.activeHero].img.back} alt={this.props.hero[this.props.activeHero].name} style={player1PokemonStyle}></img>
                                <div style={hpStyle}>{this.props.hero[this.props.activeHero].hp.current}/{this.props.hero[this.props.activeHero].hp.total}</div>

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

const hpStyle = {
    color: "#101010",
    fontFamily: "Montserrat",
    fontSize: "14px",
    letterSpacing: "0.5px",
    textDecoration: "none",
    textAlign: "center",
}


const player1PokemonStyle = {
    float: "left",
    zIndex: '9999'
}

const player2PokemonStyle = {
    float: "right",
    right: "0",
    zIndex: '9999'
}



export default Battle
