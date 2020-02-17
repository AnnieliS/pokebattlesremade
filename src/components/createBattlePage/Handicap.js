import React, { Component } from 'react'
import {FaDiceD20} from 'react-icons/fa'

export class Handicap extends Component {
    state = {
        title: '',
        body: ''
    }

    
    changeTitle = (e) => {
        this.setState( {title : e.target.value });
    }

    changeBody = (e) => {
        this.setState({ body : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addListItem(this.state.title , this.state.body);
        this.setState ({title: '' , body : ''}) ;
    }

    render() {
        return (
            <div className="col-11 m-2" style={handiStyle}>
                <div className="row mt-5 ml-5">
                    <h2 style={titleStyle}>Choose Battle Settings</h2>
                </div>
            
                <form onSubmit = {this.onSubmit} className = "form-group">
                    <input
                    type="text"
                    name = "title"
                    placeholder = "Item Title..."
                    value = {this.state.title}
                    onChange = {this.changeTitle}
                    className = "form-control" />

                    <input
                    type = "textarea"
                    name = "body"
                    placeholder= "Item Body..."
                    value = {this.state.body}
                    onChange = {this.changeBody}
                    className = "form-control"  />

                    <button
                    type = "submit"
                    style = {submitStyle}>
                    <FaDiceD20 style={diceStyle} />
                        </button>
                </form>
            </div>
        )
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
