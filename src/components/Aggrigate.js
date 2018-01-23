import React, { Component } from 'react';

export class NumberCounter extends Component {
   render() {
      return (
         <div style={{ width: '50%' }}>
            <h2 style={{textAlign: 'center'}}>{this.props.playlists.length} Playlists</h2>
         </div>
      )
   }
}

export class HourCounter extends Component {
   render() {

      let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
         return songs.concat(eachPlaylist.songs)
      }, [])
      let totalDuration = allSongs.reduce((sum, eachSong) => {
         return sum + eachSong.duration
      }, 0)

      return (
         <div style={{ width: '50%' }}>
            <h2 style={{textAlign: 'center'}}>{Math.round(totalDuration / 60)} Hours</h2>
         </div>
      )
   }
}