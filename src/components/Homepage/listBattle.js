import React, { Component } from 'react'
import {ABattle} from './ABattle'

export class ListBattle extends Component {
   
    render() {
        if (this.props.loading) {
            return (
                <div className="d-flex container justify-content-center">
                <div className="pokemonSpinner"></div>
                </div>
            )
        }
            return (
                <div className="container d-flex justify-content-around flex-wrap">
                    {this.props.allBattles.map((battle)=> (
                        <ABattle key={battle._id} battle={battle} joinBattle={this.props.joinBattle}></ABattle>
                    ))
        }
                </div>
            )
        }
}

export default ListBattle
