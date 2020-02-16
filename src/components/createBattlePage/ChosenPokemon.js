import React, { Component } from 'react'


export class ChosenPokemon extends Component {
    
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className = "col-3">
                        <img src={"https://image.flaticon.com/icons/png/128/1068/1068729.png" || this.props.chosen[0].images.avatar} alt={"none" || this.props.chosen[0].name }></img>
                    </div>
                    <div className = "col-3">
                    <img src={"https://image.flaticon.com/icons/png/128/1068/1068729.png" || this.props.chosen[1].images.avatar} alt={"none" || this.props.chosen[1].name }></img>
                    </div>
                    <div className = "col-3">
                    <img src={"https://image.flaticon.com/icons/png/128/1068/1068729.png" || this.props.chosen[2].images.avatar} alt={"none" || this.props.chosen[2].name }></img>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ChosenPokemon
