import React, { Component } from 'react'

export class Attacks extends Component {
    
    renderSpinner() {
        return (
            <div className="d-flex justify-content-center">
                <div className="pokemonSpinner"></div>
            </div>
        )
    }
   
    renderAttacks() {
        if (this.props.hero[this.props.activeHero].hp.current === 0)
        return (
            <div style={deadTextStyle}>
                This Pokémon died.
                Please choose a different Pokémon.
            </div>
        )

        else {
        const attacks = this.props.attacks.filter(attack => (attack.type.name === this.props.hero[this.props.activeHero].type2 || attack.type.name === this.props.hero[this.props.activeHero].type1) && attack.pp > 3 && attack.power > 0)
        attacks.sort(function (a, b) {
            return a.power - b.power;
          });
        return (
            <div className="row d-flex justify-content-around">
                {

                }
                {attacks.map((attack, i) =>
                <div key={i} style={attackStyle} className="col-5 m-2 attackHov" onClick={this.props.click.bind(this, attack.name)}>
                    <div  className="row m-0  justify-content-between">
                        <div style={attackName}>{attack.name}</div>
                        <div style={attackType}>{attack.type.name}</div>
                    </div>
                     <div className="row m-0 justify-content-between" >
                     <div style={attackType}>Power: {attack.power}</div>
                     <div style={attackType}>Type: {attack.damage_class.name}</div>
                 </div>
                 </div>
                )
                }

                <style>
                    {`
                    .attackHov:hover{
                        opacity: 0.5;
                    }
                    `}
                </style>
            </div>
        )
                }
    }

    render() {

            return this.props.waiting ? this.renderSpinner() : this.renderAttacks();
    }
    
}

const attackStyle={
    borderRadius: "7px",
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: "#e8e8e8",
    borderOpacity: "0.7"
}

const attackName = {
    color: "#303030",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "900",
    letterSpacing: "0.5px",
    textDecoration: "none",
    textAlign: "center"
}

const attackType = {
    color: "#686868",
    fontFamily: "Montserrat",
    fontSize: "14px",
    letterSpacing: "0.5px",
    textDecoration: "none",
    textAlign: "center"
}

const deadTextStyle = {
    fontFamily: "Montserrat",
    fontSize: "12px",
    color: "#0e0e0e",
    letterSpacing: "0.5px",
}

export default Attacks
