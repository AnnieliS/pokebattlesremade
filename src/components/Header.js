import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode';
import {NotificationManager} from 'react-notifications'

function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function deleteCookie(name) { setCookie(name, '', -1); }


export class Header extends Component {


    state = {
        idToJoin: ''
    }

    active = {
        color: "#5c5c5c",
        fontFamily: "Montserrat",
        fontSize: "14px",
        letterSpacing: "0.5px"
    }

    componentDidMount(){
       
    }

    clickLogin = () => {
        window.location = 'https://pokebattles12.herokuapp.com/login/googlelogin'
    }

    clickLogout = () => {
        deleteCookie('jwt');
        NotificationManager.warning('restart to login again', 'Logged Out successfully', 5000);
    }


    render() {
        let obj = getCookieValue('jwt');
        let loginButt;
        if( obj && obj !== undefined && obj !== 'undefined' ){
            loginButt = <button onClick={this.clickLogout} style={googleStyle}> <img src='https://i.imgur.com/ExLSkVJ.png' alt='google sign in' style={googleStyle}></img> </button>
        } else {
            loginButt = <button onClick={this.clickLogin} style={googleStyle}> <img src='https://i.imgur.com/AJPOQxL.png' alt='google sign in' style={googleStyle}></img> </button>
        }
        return (
            <div className="col-2 m-0 align-self-start h-100" style={{ backgroundColor: "#F8f8f8", position: "fixed" }}>
                <div className="row justify-content-center pt-5">
                    <div style={logoStyle}></div>
                </div>

                <div className="row justify-content-center pt-3">
                    <form className="form-group">
                        <input
                            type="text"
                            name="title"
                            placeholder="Search Placeholder..."
                            value={this.state.title}
                            onChange={this.changeTitle}
                            style={titleStyle}
                            className="form-control"
                            disabled />
                    </form>
                </div>


                <div className="row justify-content-center pt-3">
                    <div style={avatarStyle}></div>
                </div>

                <div className="row justify-content-center pt-3">
                    <div style={titleStyle}>Battles</div>
                </div>

                <div className="row justify-content-center" >
                    <NavLink exact to="/" style={liStyle} activeStyle={this.active}>Home</NavLink>
                </div>


                <div className="row justify-content-center" style={liStyle}>
                    <NavLink exact to="/CreateBattle" style={liStyle} activeStyle={this.active}>Create Battle</NavLink>
                </div>

                <div className="row justify-content-center" >
                    <NavLink exact to="/AllBattles" style={liStyle} activeStyle={this.active}>My Battles</NavLink>
                </div>

                <div className="row justify-content-center" style={liStyle}>
                    <NavLink exact to="/TestBattle" style={liStyle} activeStyle={this.active}>Test Battle</NavLink>
                </div>

                <div className="row justify-content-center pt-3">
                    <div style={titleStyle}>Pokemon</div>
                </div>

                <div className="row justify-content-center" >
                    <NavLink exact to="/AllPokemons" style={liStyle} activeStyle={this.active}>All Pokemons</NavLink>
                </div>

                


                <div className="row justify-content-center" style={liStyle}>
                    <NavLink exact to="/MusicChooser" style={liStyle} activeStyle={this.active}>Discover Music</NavLink>
                </div>

                {/* <div className="row justify-content-center" style={liStyle}>
                    <NavLink exact to="/CreatePokemon" style={liStyle} activeStyle={this.active}>CreatePokemon</NavLink>
                </div> */}

                <div className="row justify-content-center" style={liStyle}>
                    <Link to={{ pathname: "/JoinBattle", joinBattleProps: this.state.idToJoin }} className="d-none" ></Link>
                </div>

                <div className="row d-flex justify-content-center mt-5" style={liStyle}>

                    {/* <button
                onClick={this.clickLogin}
                style={googleStyle}>
                    <img src='https://i.imgur.com/ihFLS1k.png' alt="google sign in" style={googleStyle}></img>
                </button> */}
                {loginButt}

                </div>
            </div>
        )
    }
}


const liStyle = {
    color: "#B8B8B8",
    fontFamily: "Montserrat",
    fontSize: "14px",
    letterSpacing: "0.5px",
    textDecoration: "none"
}



const titleStyle = {
    fontFamily: "Montserrat",
    fontSize: "18px",
    color: "#FE5266",
    letterSpacing: "0.5px"
}

const avatarStyle = {
    height: "86px",
    width: "86px",
    backgroundImage: "url(https://static.zerochan.net/Snom.full.2773987.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%"
}

const logoStyle = {
    height: "43px",
    width: "153px",
    backgroundImage: "url(http://pixelartmaker.com/art/d98dde45d242734.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}

const googleStyle = {
    maxHeight: '50px',
    width: 'auto',
    borderRadius: "10px",
}


export default Header
