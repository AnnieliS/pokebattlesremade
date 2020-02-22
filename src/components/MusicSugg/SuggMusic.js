import React, { Component } from 'react'
import Axios from 'axios';
import Song from './Song';
// import { Media, Player, controls } from 'react-media-player'
// const { PlayPause, MuteUnmute } = controls


export class SuggMusic extends Component {
   constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
        songs: []
    }
}

componentDidMount(){
    console.log(this.props)
        // this.props.allSongs.forEach(id => {
        //     Axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
        //     .then(res=> this.setState({songs: [...this.state.songs, res.data]}))
        //     .catch(res => console.log(res));
        // })
        Axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556")
        .then(res=>this.setState({songs: res.data}))
    }


    render() {
     //   console.log(this.state.songs);
        return (
            <div>
                {/* {
                    this.state.songs.map(song => ( */}
                        <Song url={this.state.songs.preview} title={this.state.songs.title}></Song>
                    {/* ))
                } */}
            </div>
        )
    }
}

export default SuggMusic
