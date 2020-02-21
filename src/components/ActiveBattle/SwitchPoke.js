import React, { Component } from 'react'

export class SwitchPoke extends Component {
    render() {
        return (
            <div className="row d-flex justify-content-around">
            {this.props.battle.player1.map((poke,i) =>
            <div key={i} className = "col" onClick={this.props.switch.bind(this, i)}>
                <img src={poke.img.front} alt={poke.name} style={{textAlign: "center"}}></img>
            </div>
            )
    }
         </div>
        )
    }
}

export default SwitchPoke
