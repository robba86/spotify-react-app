import React, { Component } from 'react'

function minTommss(minutes) {
   var sign = minutes < 0 ? "-" : "";
   var min = Math.floor(Math.abs(minutes));
   var sec = Math.floor((Math.abs(minutes) * 60) % 60);
   return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
}

export class Songs extends Component {
   render() {
      return (
         <li>
            {this.props.playlist.songs.map(song =>
               <span style={{ display: 'flex', justifyContent: 'space-between' }}><span>{song.name}</span><span>{minTommss(song.duration / 60)}</span></span>
            )}
         </li>
      )
   }
}