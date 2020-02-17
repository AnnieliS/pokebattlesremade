import React, { Component } from 'react'

export class Pokemon extends Component {    
    render() {
        return (
            <div>
                <img className="poke"
                src={this.props.poke.images.icon}
                alt={this.props.poke.name}
                onClick = {this.props.choose.bind(this, this.props.poke._id)}></img>

                <style>
                                {`
                                .poke:hover{
                                    opacity: 0.7;
                                }
                                `}
                            </style>        
            </div>
        )
    }
}

export default Pokemon
