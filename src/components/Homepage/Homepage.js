import React, { Component } from 'react'
import ListBattle from './ListBattle'
import NewBattle from './NewBattle'
import Axios from 'axios'

export class Homepage extends Component {
    state={
        allBattles : [],
        loading: false
    }

    componentWillMount(){
        this.setState({loading: true});
    }
    
    componentDidMount(){
        Axios.get("https://pokebattles12.herokuapp.com/battles/read")
        .then(res => {this.setState({allBattles : res.data}); this.setState({loading: true})})
        .catch(res => console.log(res));
    }

    joinBattle= () => {
        console.log("joining");
    }

    createBattle = () => {
        alert("create");
    }
    
    
    render() {
        console.log(this.state.allBattles);
        return (
            <div className="col-10 justify-content-center ml-1 flex-wrap">
                <div className="row">
                    <div className=" d-flex float-left" style={backBlock}></div>
                    <div className="col">
                    <NewBattle createBattle = {this.createBattle}></NewBattle>
                    </div>
                    <div className = "col">
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
    backgroundImage: "linear-gradient(90deg, #e00727, #f0e181)",
}

export default Homepage
