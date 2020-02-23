import React, { Component } from 'react'
import Axios from 'axios'
import FavPoke from './FavPoke';
import SuggMusic from './SuggMusic';

export class Discover extends Component {
    state = {
        chosen: [],
        isChoose: false,
        allPoke: [],
        allSongs: []

    }
    
    componentDidMount() {
        Axios.get('https://pokebattles12.herokuapp.com/pokemons/read')
            .then(res => { this.setState({ allPoke: res.data }); })
            .catch(res => console.log(res));

    }

    Choose = (id) => {
        let chosen = this.state.chosen;
        if (chosen.length < 6)
            chosen.push(this.state.allPoke.filter(poke => poke._id === id));
        this.setState({ chosen });
        this.typeToSong();
        this.chooseToggle();
    }

    deChoose = (id) => {
        this.setState({ chosen: [...this.state.chosen.filter(poke => poke[0]._id !== id)] })
    }

    chooseToggle = () => {
        this.setState({isChoose : !this.state.isChoose});
    }


    typeToSong(){
        let songsArr = [];
        this.state.chosen.forEach(poke => {
            console.log(poke[0].type1);
            if (poke[0].type1 === "bug") 
                songsArr.push(609244);
            else if (poke[0].type1 === "dark")
                songsArr.push(3113198);

            else if (poke[0].type1 === "dragon")
                songsArr.push(664107);

            else if (poke[0].type1 === "electric")
                songsArr.push(3135556);

            else if (poke[0].type1 === "fairy")
                songsArr.push(784689672)

            else if (poke[0].type1 === "fighting")
                songsArr.push(576431);

            else if (poke[0].type1 === "fire")
                songsArr.push(25746431);

            else if (poke[0].type1 === "flying")
                songsArr.push(943376);

            else if (poke[0].type1 === "ghost")
                songsArr.push(664507);

            else if (poke[0].type1 === "grass")
                songsArr.push(1583148);

            else if (poke[0].type1 === "ground")
                songsArr.push(4303991);

            else if (poke[0].type1 === "ice")
                songsArr.push(3153876);

            else if (poke[0].type1 === "normal")
                songsArr.push(661002192);

            else if (poke[0].type1 === "poison")
                songsArr.push(845095592);

            else if (poke[0].type1 === "psychic")
                songsArr.push(562487);

            else if (poke[0].type1 === "rock")
                songsArr.push(7179758);

            else if (poke[0].type1 === "steel")
                songsArr.push(2114399);

            else if (poke[0].type1 === "water")
                songsArr.push(130292142);
        });
        const setArr = new Set(songsArr);
        const backToArr = [...setArr];
        this.setState({allSongs : []})

        backToArr.forEach(id => {
            Axios.get(`https://api.deezer.com/track/${id}`)
            .then(res=> {this.setState({allSongs: [...this.state.allSongs, res.data] });})
            .catch(res => console.log(res));
        })
        
        
    }



    render() {
        console.log(this.state.allSongs)
        return (
            <div className = "container">
                <FavPoke pokemons={this.state.allPoke} chosen={this.state.chosen} choose={this.Choose} deChoose={this.deChoose} chooseToggle={this.chooseToggle} isChoose={this.state.isChoose}></FavPoke>
                <div style={titleStyle}>Suggested Music</div>
                <SuggMusic allSongs={this.state.allSongs} ></SuggMusic>
                
            </div>
        )
    }
}

const titleStyle = {
    fontFamily: "Montserrat",
    fontSize: "38px",
    color: "#FE5266",
    letterSpacing: "0.5px"
}

export default Discover
