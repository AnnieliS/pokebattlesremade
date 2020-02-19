import React, { Component } from 'react'

export class Pokemon extends Component {    
    render() {
        return (
            <div className="col-3 m-2 poke" style={pokemonStyle} onClick = {this.props.choose.bind(this, this.props.poke._id)}>
                <img
                src={this.props.poke.images.icon}
                alt={this.props.poke.name}
                ></img>
                <p style = {pokemonNameStyle}>{this.props.poke.name}</p>
                <div className = "d-flex justify-content-around mt-1">
        <p style={typeStyle}>{this.props.poke.type1}</p>
        <p style={typeStyle}>{this.props.poke.type2}</p>
        </div>
                <style>
                    {`
                    .poke:hover{
                        opacity: 0.5;
                    }
                    `}
                </style>        
            </div>
        )
    }
}

const pokemonStyle ={
    borderRadius : "10px",
    // borderStyle : "dashed",
    // borderWidth: "2px",
    // borderColor: "#d8d8d8",
    backgroundColor: "#fff",
    boxShadow: "0 0 5px 0 #e8e8e8",

}

const pokemonNameStyle = {
    fontFamily: "Montserrat",
    fontSize: "14px",
    color: "#404040",
    letterSpacing: "0",
    opacity: "0.7",
    display: "inline",
}

const typeStyle = {
    fontFamily: "Montserrat",
    fontSize: "10px",
    color: "#686868",
    letterSpacing: "0",
    opacity: "0.7",
    display: "inline",

    textAlign: "center",
    width: "50px",
    height: "18px",

    borderRadius : "7px",
    borderStyle : "dashed",
    borderWidth: "1px",
    borderColor: "#e8e8e8"

}

export default Pokemon
