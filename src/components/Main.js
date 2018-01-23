import React, { Component } from 'react';
import '../styles/reset.css';
import '../styles/Main.css';

import { NumberCounter, HourCounter } from './Aggrigate';
import { Filter } from './Filter';
import { Playlist } from './Playlist';
import { Songs } from './Songs';

import logo from '../images/logo.svg';


let fakeData = {
  user: {
    name: 'Robba',
    playlists: [
      {
        name: 'Favorites',
        songs: [
          { name: 'Take Ü There (feat. Kiesza)', duration: 320 },
          { name: 'Staccato - Original Mix - ORIGINAL', duration: 452 },
          { name: 'Tico', duration: 541 }
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          { name: 'Pistol Whip', duration: 320 },
          { name: 'RUIN - ORIGINAL', duration: 452 },
          { name: 'Purp', duration: 541 }
        ]
      },
      {
        name: 'Datsik',
        songs: [
          { name: 'Sensei', duration: 465 },
          { name: 'Just Saiyan\'', duration: 321 },
          { name: 'Fly Low (feat. Lox Chatterbox', duration: 546 }
        ]
      },
      {
        name: 'Julmusik',
        songs: [
          { name: 'Tänd ett ljus', duration: 465 },
          { name: 'Last Christmas', duration: 321 },
          { name: 'Feliz Navidad', duration: 546 }
        ]
      },
    ]
  }
}

class Main extends Component {

  constructor() {
    super();
    this.state = {
      data: {},
      filterString: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: fakeData })
    }, 1000)
  }

  render() {

    let defaultBackgroundColor = { backgroundColor: '#111' }
    let flex = { display: 'flex' }

    let playlistToRender = this.state.data.user ? this.state.data.user.playlists.filter(playlist =>
      playlist.name.toLowerCase().includes(
        this.state.filterString.toLowerCase()
      )) : []

    return (


      <div style={{ ...flex, flexDirection: 'column' }}>
        {
          this.state.data.user ?
            <div>
              <h1 style={{...defaultBackgroundColor, display: 'flex', padding: '.25em', color: '#fff'}}>
                <img src={logo} className="App-logo" alt="logo" style={{width: 'auto', height: '1em'}} />
                {this.state.data.user.name}'s Playlists
              </h1>

              <div style={{ ...flex, flexDirection: 'row' }}>
                <NumberCounter playlists={playlistToRender} />

                <HourCounter playlists={playlistToRender} />
              </div>

              <Filter onTextChange={text => this.setState({filterString: text})} />

              <div style={{ ...flex, flexDirection: 'row', flexWrap: 'wrap' }}>
                {playlistToRender.map(playlist => <Playlist playlist={playlist} />)}
              </div>

              <h3 style={{color: '#1ed169'}}>All songs</h3>
              <ul style={{margin: '0'}}>
                <li style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#111', fontWeight: 'bold', padding: '1em', margin: '0' }}><span>Name</span><span>Duration</span></li>
              </ul>
              <ul className="songs">
                {playlistToRender.map(playlist => <Songs playlist={playlist} />)}
              </ul>

            </div> : <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        }
      </div>
    )

  }

}

export default Main;
