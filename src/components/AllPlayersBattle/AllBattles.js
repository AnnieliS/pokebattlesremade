import React, { Component } from 'react'
import Axios from 'axios'
import ListBattle from './ListBattle'
import { Redirect } from 'react-router-dom'

export class AllBattles extends Component {
    state={
        battles : [
            {
            bId: "5e5395b1e254620017eba050",
            player: "player1"
        },
        {
            bId: "5e52515542098900174449e6",
            player: "player2"
        }
        ],
        allBattles:  [],
        loading: true,
        redirect: false,
        chosenID: 0,
        
    }

    componentWillMount(){
        this.setState({loading: true});
    }
    
    componentDidMount(){
        this.state.battles.map(battle => 
            Axios.get(`https://pokebattles12.herokuapp.com/battle/${battle.bId}`)
            .then(res => {this.setState({allBattles : [...this.state.allBattles, res.data]}); this.setState({loading: false})})
            .catch(res => console.log(res))
            )
       
    }

    enterBattle= (id, player) => {
    console.log(id);
    this.setState({chosenID: id});
    this.setState({player})
     this.setState({redirect: true});
    }

    createBattle = () => {
        alert("create");
    }
    
    
    render() {
        if(this.state.redirect){
        console.log(this.state.chosenID)
        return (
        <Redirect
            to={{
              pathname: "/ActiveBattle",
              state: {battleId: this.state.chosenID,
                        player: this.state.player}
            }}
          />)
        }
        else if(this.state.loading)
            return (
                <div className="d-flex container justify-content-center">
                <div className="pokemonSpinner"></div>
                </div>
            )

        console.log(this.state.allBattles)
        return (
            <div className="col-10 justify-content-center ml-1 flex-wrap">
                <div className="row">
                    <div className=" d-flex float-left" style={backBlock}></div>
                    <div className = "row">
                    <ListBattle allBattles={this.state.allBattles} joinBattle={this.enterBattle} player={this.state.player}></ListBattle>
                    </div>
                </div>

            </div>
        )
    }
}

const backBlock = {
    width: "100vw",
    height: "358px",
    zIndex: "-1",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundImage: "linear-gradient(90deg, #e00727, #f0e181)",
}



export default AllBattles
