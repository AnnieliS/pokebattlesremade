import React, { Component } from 'react'

export class Handicap extends Component {
state = {
    handi: 'All'
}

    changeHandi = (e) => {
        
        this.setState({handi : e.target.value})
        this.props.setHandi(e.target.value);
       
    }



    render() {
        return (
            <div className="col-11 m-2" style={handiStyle}>
                <div className="row mt-5 ml-5">
                    <h2 style={titleStyle}>Choose filter</h2>
                </div>

                <form className="form-group">
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
                </form>
            </div>
        )
    }

}

const handiStyle = {
    height: "200px",
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




export default Handicap
