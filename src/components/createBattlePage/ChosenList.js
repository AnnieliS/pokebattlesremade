import React, { Component } from 'react'



export class ChosenList extends Component {
    render() {
        let i = this.props.chosen.length;
        let placeHolders = [];

        for (i; i < 3; i++) {
            placeHolders.push("https://image.flaticon.com/icons/png/128/1068/1068729.png");
        }

        return (
            <div className="container d-flex justify-content-around flex-wrap">
                <span className="row ml-1" style={chosenListStyle}>


                    {this.props.chosen.map(chosen =>
                        <div key={chosen[0]._id} className="col-3 m-auto align-content-around" style={chosenStyle}>
                            <img style={imgResponse1} src={chosen[0].images.avatar} alt={chosen[0].name} onClick={this.props.deChoose.bind(this, chosen[0]._id)}></img>
                            <img style={imgResponse} src={chosen[0].images.front} alt={chosen[0].name} onClick={this.props.deChoose.bind(this, chosen[0]._id)}></img>
                        </div>
                    )}



                    {placeHolders.map((ph, i) =>
                        <div key={i} className="col-3 m-auto align-content-around" style={notChosenStyle}>
                            <img className="m-auto d-block" style={imgNotResponse} src={ph} alt={"not Chosen"}></img>
                        </div>
                    )}


                </span>

            </div>
        )
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


export default ChosenList
