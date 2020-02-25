import React, { Component } from 'react'
import { FaDiceD20 } from 'react-icons/fa'

export class Handicap extends Component {
state = {
    handi: 'All'
}

    changeHandi = (e) => {
        
        this.setState({handi : e.target.value})
        //console.log(this.state.handi);
        this.props.setHandi(e.target.value);
       
    }

    // componentDidUpdate(){
    //     this.props.setHandi(this.state.handi);
    // }


    onSubmit = (e) => {
        e.preventDefault();
        const pokemons = this.makePlayerObj();
        this.props.onSubmit(pokemons);
    }

    render() {
        return (
            <div className="col-11 m-2" style={handiStyle}>
                <div className="row mt-5 ml-5">
                    <h2 style={titleStyle}>Choose Battle Settings</h2>
                </div>

                <form onSubmit={this.onSubmit} className="form-group">
                    <label style={labelStyle}>Battle of </label>
                    <select
                        type="text"
                        name="handi"
                        value={this.state.handi}
                        onChange={this.changeHandi}
                        className="form-control m-1"
                    >
                        <optgroup label="All">
                        <option value="all">All</option>
                        </optgroup>
                        <optgroup label="Types">
                        <option value="bug">bug</option>
                        <option value="dark">dark</option>
                        <option value="dragon">dragon</option>
                        <option value="electric">electric</option>
                        <option value="fairy">fairy</option>
                        <option value="fighting">fighting</option>
                        <option value="fire">fire</option>
                        <option value="flying">flying</option>
                        <option value="ghost">ghost</option>
                        <option value="grass">grass</option>
                        <option value="ground">ground</option>
                        <option value="ice">ice</option>
                        <option value="normal">normal</option>
                        <option value="poison">poison</option>
                        <option value="psychic">psychic</option>
                        <option value="rock">rock</option>
                        <option value="steel">steel</option>
                        <option value="water">water</option>
                        </optgroup>
                        <optgroup label="Generation">
                        <option value="1">Gen 1</option>
                        <option value="2">Gen 2</option>
                        <option value="3">Gen 3</option>
                        <option value="4">Gen 4</option>
                        <option value="5">Gen 5</option>
                        </optgroup>
                        <optgroup label="misc">
                        <option value="small">small bois</option>
                        <option value="big">big bois</option>
                        <option value="heavy">heavy bois</option>
                        <option value="light">light bois</option>
                        </optgroup>
                    </select>
                    <button
                        type="submit"
                        style={submitStyle}>
                        <FaDiceD20 style={diceStyle} />
                    </button>
                </form>
            </div>
        )
    }

    makePlayerObj() {
        let pokemon = [];
        this.props.chosen.forEach(poke => {
            poke = poke[0];
            pokemon.push({
                pokedex_number: poke.pokedex_number,
                name: poke.name,
                type1: poke.type1,
                type2: poke.type2 || "",
                weakness: poke.weaknesses,
                img: {
                    default: poke.images.icon,
                    front: poke.images.front,
                    back: poke.images.back
                },
                hp: {
                    current: poke.stats.hp,
                    total: poke.stats.hp
                },
                stats: {
                    attack: poke.stats.attack,
                    defense: poke.stats.defense,
                    sp_attack: poke.stats.sp_attack,
                    sp_defense: poke.stats.sp_defense
                }
            }
            )
        })
        return pokemon;

    }
}

const handiStyle = {
    height: "307px",
    boxShadow: "0 0 22px 0 rgba(254,82,102,0.15)",
    borderRadius: "20px",
    background: "#FFF"
}

const titleStyle = {
    fontFamily: "Montserrat",
    fontSize: "18px",
    color: "#000",
    letterSpacing: "0"
}

const labelStyle = {
    fontFamily: "Montserrat",
    fontSize: "38px",
    color: "#FE5266",
    letterSpacing: "0.5px"
}

const submitStyle = {
    border: '0',
    padding: '0',
    backgroundColor: '#FD584200',
    position: 'relative',
    marginLeft: '42.54%',


}

const diceStyle = {
    height: '54px',
    width: '54px',
    color: '#FD5842'
}


export default Handicap
