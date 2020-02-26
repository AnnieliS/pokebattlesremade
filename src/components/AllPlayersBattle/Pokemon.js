import React, { Component } from 'react'

export class Pokemon extends Component {
    render() {
        return (
            <div className="mt-2">
                 <img src={this.props.poke.img.front} alt={this.props.poke.name}></img>
                    <div style={titleStyle}>{this.props.poke.name}</div>
            </div>
        )
    }
}

const titleStyle = {
    color: "#B8B8B8",
    fontFamily: "Montserrat",
    fontSize: "14px",
    letterSpacing: "0.5px",
    textDecoration: "none"
}

export default Pokemon
