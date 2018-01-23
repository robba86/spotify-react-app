import React, { Component } from 'react'

export class Playlist extends Component {
   render() {
      return (
         <div style={{width: '25%'}}>
            <h3 style={{color: '#1ed169'}}>{this.props.playlist.name}</h3>
            <ul>
               {this.props.playlist.songs.map(song =>
                  <li style={{ listStyleType: 'decimal' }}>{song.name}</li>
               )}
            </ul>
         </div>
      )
   }
}