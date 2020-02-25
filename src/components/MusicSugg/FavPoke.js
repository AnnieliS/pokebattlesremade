import React, { Component } from 'react'
import ChoosePoke from './ChoosePoke';
import Handicap from './Handicap';

export class FavPoke extends Component {

    state = {
        handi: 'All'
    }

    setHandi = (handi) => {
        console.log(handi)
        this.setState({handi});
    }
 

    renderChoose() {
        const h = this.state.handi;
        let pokeFilter = [];
        if(h === "All")
            pokeFilter = this.props.pokemons;
      else if(h === "bug" || h === "dark" || h === "electric" ||  h === "dragon" || h === "fairy " || h === "fighting" || h === "fire" || h === "flying" || h === "ghost" || h === "grass" || h === "ground" || h === "ice" || h === "normal" || h === "poison" || h === "psychic" || h === "rock" || h === "steel" || h === "water")
        pokeFilter = this.props.pokemons.filter(poke => (poke.type1 === h || poke.type2 === h))
        else if(h === "small")
        pokeFilter = this.props.pokemons.filter(poke => (poke.height_m < 0.4))
        else if(h === "big")
        pokeFilter = this.props.pokemons.filter(poke => (poke.height_m > 2))
        else if(h === "heavy")
        pokeFilter = this.props.pokemons.filter(poke => (poke.weight_kg > 150))
        else if(h === "1" || h === "2" || h === "3" || h === "4" || h === "5")    
        pokeFilter = this.props.pokemons.filter(poke => (poke.generation === parseInt(h)));

        return (
            <div className="container d-flex justify-content-around flex-wrap">
                <Handicap handi={this.state.handi} setHandi = {this.setHandi}></Handicap>
                {pokeFilter.map((poke) => (
                    <ChoosePoke key={poke._id} poke={poke} choose={this.props.choose}></ChoosePoke>
                ))
                }
            </div>
        )
    }

    renderChosen() {
        let i = this.props.chosen.length;
        let placeHolders = [];

        for (i; i < 6; i++) {
            placeHolders.push("https://image.flaticon.com/icons/png/128/1068/1068729.png");
        }

    



        return (
            <div className="container d-flex justify-content-around flex-wrap">
                <div className="row ml-1 flex-wrap" style={chosenListStyle}>


                    {this.props.chosen.map(chosen =>
                        <div key={chosen[0]._id} className="col-2 m-auto align-content-around" style={chosenStyle}>
                            <img style={imgResponse1} src={chosen[0].images.avatar} alt={chosen[0].name} onClick={this.props.deChoose.bind(this, chosen[0]._id)}></img>
                            <img style={imgResponse} src={chosen[0].images.front} alt={chosen[0].name} onClick={this.props.deChoose.bind(this, chosen[0]._id)}></img>
                        </div>
                    )}



                    {placeHolders.map((ph, i) =>
                        <div key={i} className="col-2 m-auto align-content-around" style={notChosenStyle} onClick={this.props.chooseToggle.bind()}>
                            <img className="m-auto d-block" style={imgNotResponse} src={ph} alt={"not Chosen"}></img>
                        </div>
                    )}


                </div>

            </div>

        )


    }

    render() {
        if (this.props.loading) {
            return (
                <div className="d-flex container justify-content-center">
                <div className="pokemonSpinner"></div>
                </div>
            )
        }

        return this.props.isChoose ? this.renderChoose() : this.renderChosen()


    }
}


const chosenListStyle = {
    height: "251px",
    width: "100%",
    margin: "0",
    textAlign: "center"
}

const chosenStyle = {
    height: "233px",
    width: "233px",
    borderRadius: "10px",
    backgroundImage: "linear-gradient(rgba(255,0,0,0), rgba(255,0,0,0.4))"

}

const notChosenStyle = {
    height: "233px",
    width: "233px",
    borderRadius: "10px",
    borderStyle: "dashed",
    borderWidth: "2px",
    borderColor: "#d8d8d8",
}

const imgNotResponse = {
    maxWidth: "100%",
    height: "auto",
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}


const imgResponse = {
    position: "absolute",
    maxWidth: "100%",
    height: "auto",
    bottom: "0",
    left: "20%"

}

const imgResponse1 = {
    position: "absolute",
    maxWidth: "100%",
    height: "auto",
    bottom: "0",
    left: "20%",
    zPosition: "-1",
    opacity: "0.4"

}


export default FavPoke
