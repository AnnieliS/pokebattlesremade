import React, { Component } from 'react'
import Song from './Song';
// import { Media, Player, controls } from 'react-media-player'
// const { PlayPause, MuteUnmute } = controls


export class SuggMusic extends Component {
   constructor(props){
    super(props);
    this.state = {
        songs: []
    }
}

    render() {
        console.log(this.props.allSongs);
    
        return (
            <div>
                {
                    this.props.allSongs.map((song,i) => ( 
                        <Song key={i} url={song.preview} title={song.title}></Song>
                    ))
                }
            </div>
        )
    }
}

export default SuggMusic
