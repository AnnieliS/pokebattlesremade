import React, { Component } from 'react'
import ListBattle from './ListBattle'
import NewBattle from './NewBattle'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'



export class Homepage extends Component {
    state={
        allBattles : [],
        loading: false,
        redirect: false,
        chosenID: 0
    }

    componentWillMount(){
        this.setState({loading: true});
    }
    
    componentDidMount(){
        Axios.get("https://pokebattles12.herokuapp.com/battles/read")
        .then(res => {this.setState({allBattles : res.data.sort((a, b) => a.player2[0].name.length - b.player2[0].name.length)}); this.setState({loading: true})})
        .catch(res => console.log(res));
    }

    joinBattle= (id) => {
    this.setState({chosenID: id});
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
              pathname: "/JoinBattle",
              state: {battleId: this.state.chosenID}
            }}
          />)
        }
        else
        return (
            <div className="col-10 justify-content-center ml-1 flex-wrap">
                <div className="row">
                    <div className=" d-flex float-left" style={backBlock}></div>
                    <div className="col w-100 d-flex justify-content-center">
                    <NewBattle createBattle = {this.createBattle}></NewBattle>
                    </div>
                    <div className = "row">
                    <ListBattle allBattles={this.state.allBattles} joinBattle={this.joinBattle}></ListBattle>
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

export default Homepage
