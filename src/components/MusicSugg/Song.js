import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute } = controls

export class Song extends Component {
    render() {
        return (
            <div className="row d-flex justify-content-around">
            <div style={songName}>{this.props.title}</div>
            <Media vendor={'audio'}>
                <div className="media">
                    <div className="media-player">
                        <Player src={this.props.url} />
                    </div>
                    <div className="media-controls">
                        <PlayPause style={controlsStyle} />
                        <MuteUnmute style={controlsStyle} />
                    </div>
                </div>
            </Media>
            </div>
        )
    }
}

const songName = {
    color: "#303030",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "900",
    letterSpacing: "0.5px",
    textDecoration: "none",
    textAlign: "center"
}

const controlsStyle = {
    color: "#686868",
    fontFamily: "Montserrat",
    fontSize: "14px",
    letterSpacing: "0.5px",
    textDecoration: "none",
    textAlign: "center"
}

export default Song
