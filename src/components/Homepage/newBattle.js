import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export class NewBattle extends Component {
    render() {
        const newIcons = [{ img: "https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif", name: "Eevee" }, {img: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif", name: "Bulba"}, {img: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif", name: "Pikachu"}];

        return (
            <div style={battleStyle} className="container m-5 d-flex justify-content-center flex-wrap">
                <div className="row w-100 justify-content-center m-0 ">
                    <div style={titleStyle}>Battle</div>
                </div>
                <div className="row w-100 justify-content-center m-0">
                    <div style={idStyle}>Create New Battle</div>
                </div>
                <div className="row m-0">
                 <NavLink exact to='/CreateBattle'><div style={joinStyle}>NEW</div></NavLink>

                </div>
                <div style={line} ></div>
                <div className="d-flex m-auto justify-content-between align-items-end">
                    {newIcons.map((poke, i) => (
                        <div key={i} style={{height: "80px", width:"70px"}}>
                        <img src={poke.img} alt={"icon"}></img>
                        <div style={idStyle}>{poke.name}</div>
                           </div>
                ))}
                </div>
            </div>
        )
    }
}

const battleStyle = {
    height: '316px',
    width: '262px',
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 0 5px 0 #e8e8e8",
}

const idStyle = {
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

const joinStyle = {
    backgroundColor: "#FE5266",
    width: "80px",
    height: "25px",
    textAlign: "center",
    fontFamily: "Montserrat",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "bold",

}

const line = {
    float: "left",
    width: "241px",
    height: "1px",
    backgroundColor: "#B8B8B8",
    position: "absolute",
    marginTop: "158px",
    marginRight: "131px",
}

export default NewBattle
