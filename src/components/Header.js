import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Axios from 'axios'
// import Axios from 'axios'


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

    clickLogin = () => {
        Axios.get("https://pokebattles12.herokuapp.com/login/googlelogin")
        .then(res => console.log(res.data))
        .catch(e => console.log(e))
    }
    

    render() {
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

                <button
                onClick={this.clickLogin}
                style={googleStyle}>
                    <img src='https://i.imgur.com/ihFLS1k.png' alt="google sign in" style={googleStyle}></img>
                </button>
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
    backgroundImage: "url(http://pixelartmaker.com/art/4debfda444f7e54.png)",
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
