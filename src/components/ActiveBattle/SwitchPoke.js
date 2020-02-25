import React, { Component } from 'react'
import Poke from './Poke'

export class SwitchPoke extends Component {
    

    render() {
        if(this.props.hero)
        return (
            <div className="row d-flex justify-content-around">
            {this.props.hero.map((poke,i) =>
            <Poke poke={poke} i={i} switch={this.props.switch}></Poke>
            )
    }
         </div>
        )
    }
}

export default SwitchPoke
