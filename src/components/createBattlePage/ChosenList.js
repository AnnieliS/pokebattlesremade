import React, { Component } from 'react'



export class ChosenList extends Component {
    render() {
        let i = this.props.chosen.length;
        let placeHolders = [];

        for(i ; i< 3; i++){
            placeHolders.push("https://image.flaticon.com/icons/png/128/1068/1068729.png");
        }

        return (
            <div className="container">
            <span className="row ml-1" style={chosenListStyle}>

                
            {this.props.chosen.map(chosen => 
                <div key={chosen[0]._id} className = "col-3 m-2" style={chosenStyle}>
                    <img style={imgResponse1} src={chosen[0].images.avatar} alt={chosen[0].name} onClick = {this.props.deChoose.bind(this, chosen[0]._id)}></img>
                   <img style={imgResponse} src={chosen[0].images.front} alt={chosen[0].name} onClick = {this.props.deChoose.bind(this, chosen[0]._id)}></img>
                </div>
                )}
               
               
               
                {placeHolders.map((ph, i) =>
                    <span key={i} className = "col-3 m-2" style = {notchosenStyle}>
                    <img style={imgnotResponse} src={ph} alt={"not Chosen"}></img>
                </span>
                )}


            </span>
            
        </div>   
        )
    }
}

const chosenListStyle = {
    height: "251px",
    width: "100%",
    backgroundColor: "#FEFEFE",
    // backgroundColor: "#3e30d1",
    margin: "0",
    textAlign: "center"
}

const chosenStyle = {
    height: "233px",
    width: "233px",
    borderRadius : "10px",
    //backgroundColor: "#c38bc9",
    backgroundImage: "linear-gradient(rgba(255,0,0,0), rgba(255,0,0,0.4))"

}

const notchosenStyle = {
    height: "233px",
    width: "233px",
    borderRadius : "10px",
    backgroundColor: "#d6bf7e"
}

const imgnotResponse = {
    maxWidth: "100%",
    height: "auto",
    verticalAlign: "center"
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


export default ChosenList
