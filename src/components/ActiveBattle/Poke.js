import React, { Component } from 'react'

export class Poke extends Component {
    render() {
        if (this.props.poke.hp.current === "0")
            return (
                <div key={this.props.i} className="col justify-content-around justify-item-center">
                    <img src={this.props.poke.img.front} alt={this.props.poke.name} style={deadStyle}></img>
                    <h6 style={deadTextStyle} className="ml-4">dead</h6>
                </div>
            )
        else
            return (
                <div key={this.props.i} className="col justify-content-around" onClick={this.props.switch.bind(this, this.props.i)}>
                    <img src={this.props.poke.img.front} alt={this.props.poke.name} style={{ textAlign: "center" }}></img>
                </div>
            )
    }
}

const deadStyle = {
    filter: 'grayscale(100%)',
    textAlign: 'center'
}

const deadTextStyle = {
    fontFamily: "Montserrat",
    fontSize: "12px",
    color: "#0e0e0e",
    letterSpacing: "0.5px",
}

export default Poke
