import React, { Component } from 'react'
import Pokemon from './Pokemon'

export class ABattle extends Component {


    render() {
       const joinButton = Object.entries(this.props.battle.player2[0].name).length === 0;
       let button;
       
        if (joinButton)
            button = <div style={joinStyle} onClick={this.props.joinBattle.bind(this, this.props.battle._id, this.props.battle.handicap)}>JOIN</div>

        else
            button = <div style={doneStyle}>DONE</div>

        return (
            <div style={battleStyle} className="container m-5 d-flex justify-content-center flex-wrap centerWhenSmall">
                <div className="row m-0 ">
                    <div style={titleStyle}>Battle</div>
                </div>
                <div className="row m-0">
                    <div style={idStyle}>{this.props.battle._id}</div>
                </div>
                <div className="row m-0">
                   {button}

                </div>
                <div style={line} ></div>
                <div className="d-flex m-auto justify-content-between align-items-end">
                    {this.props.battle.player1.map((poke, i) => (
                        <Pokemon key={i} poke={poke}></Pokemon>

                    ))}
                </div>
            </div>
        )
    }
}

const battleStyle = {
    height: '316px',
    width: '262px',
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 0 5px 0 #e8e8e8",
}

const idStyle = {
    color: "#B8B8B8",
    fontFamily: "Montserrat",
    fontSize: "14px",
    letterSpacing: "0.5px",
    textDecoration: "none"
}

const titleStyle = {
    fontFamily: "Montserrat",
    fontSize: "18px",
    color: "#FE5266",
    letterSpacing: "0.5px"
}

const joinStyle = {
    backgroundColor: "#FE5266",
    width: "80px",
    height: "25px",
    textAlign: "center",
    fontFamily: "Montserrat",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "bold",

}

const doneStyle = {
    backgroundColor: "#5c5c5c",
    width: "80px",
    height: "25px",
    textAlign: "center",
    fontFamily: "Montserrat",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "bold",

}

const line = {
    float: "left",
    width: "241px",
    height: "1px",
    backgroundColor: "#B8B8B8",
    position: "absolute",
    marginTop: "158px",
    marginRight: "131px",
}

export default ABattle
