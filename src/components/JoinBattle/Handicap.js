import React, { Component } from 'react'
import { FaDiceD20 } from 'react-icons/fa'

export class Handicap extends Component {
    state = {
        title: '',
        body: ''
    }


    changeTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    changeBody = (e) => {
        this.setState({ body: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const pokemons = this.makePlayerObj();
        console.log(pokemons);
        this.props.onSubmit(pokemons);
    }

    render() {
        return (
            <div className="col-11 m-2" style={handiStyle}>
                <div className="row mt-5 ml-5">
                    <h2 style={titleStyle}>Choose Battle Settings</h2>
                </div>

                <form onSubmit={this.onSubmit} className="form-group">
                    <input
                        type="text"
                        name="title"
                        placeholder="Item Title..."
                        value={this.state.title}
                        onChange={this.changeTitle}
                        className="form-control m-1"
                        disabled />

                    <input
                        type="textarea"
                        name="body"
                        placeholder="Item Body..."
                        value={this.state.body}
                        onChange={this.changeBody}
                        className="form-control m-1"
                        disabled />

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
            console.log(poke.images.icon);
            pokemon.push({
                    id: poke.pokedex_number,
                    name: poke.name,
                    type1: poke.type1,
                    type2: poke.type2,
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
                        spAttack: poke.stats.sp_attack,
                        spDefense: poke.stats.sp_defense
                    },
                    attacks: {
                        attack1: "",
                        attack2: "",
                        attack3: "",
                        attack4: ""
                    }

            }
        )})
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
    fontSize: "28px",
    color: "#000",
    letterSpacing: "0"
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
