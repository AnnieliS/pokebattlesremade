import React, { Component } from 'react'
import ListBattle from './ListBattle'
import NewBattle from './NewBattle'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode';
import { NotificationManager } from 'react-notifications';

function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}


export class Homepage extends Component {
    state={
        allBattles : [],
        loading: false,
        redirect: false,
        chosenID: 0,
        handicap: 'All'
    }

    componentWillMount(){
        this.setState({loading: true});
    }
    
    componentDidMount(){
        Axios.get("https://pokebattles12.herokuapp.com/battle")
        .then(res => {this.setState({allBattles : res.data.sort((a, b) => a.player2[0].name.length - b.player2[0].name.length)}); this.setState({loading: true})})
        .catch(res => console.log(res));
        let obj = getCookieValue('jwt');
        if( obj && obj !== undefined && obj !== 'undefined' ){
            sessionStorage.setItem('user',JSON.stringify(jwtDecode(obj).data));
        }
    }

    joinBattle= (id, handicap) => {
        if( sessionStorage.getItem('user') !== undefined ){
            this.setState({chosenID: id});
            this.setState({handicap})
             this.setState({redirect: true});
        }
        else {
            NotificationManager.info('System Message', 'Login to battle', 5000);
        }
   
    }

    createBattle = () => {
    }
    
    
    render() {
        if(this.state.redirect){
        console.log(this.state.chosenID)
        return (
        <Redirect
            to={{
              pathname: "/JoinBattle",
              state: {battleId: this.state.chosenID,
                        handicap: this.state.handicap}
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
