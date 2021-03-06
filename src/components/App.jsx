import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SongForm from './SongForm/SongForm';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music : [] ,
            newSong : []
        };
    }

    componentDidMount(){
        this.getMusic();
    }

    async getMusic() {
      let response = await axios.get("http://127.0.0.1:8000/music/")
      this.setState ( {
          music : response.data
      });
    }

    async addSong() {
        axios.post("http://127.0.0.1:8000/music/", this.state)
        .then(response => {
            this.setState ( {
           newSong: response.data
           
        } )})

        
        
    }



    render() {
        console.log(this.state);
        console.log(SongForm);
        return (
           <div>
            <h1>Antoine's Music Library Front-End</h1>
           <SearchBar/>           
           <MusicTable music={this.state.music} />
           <SongForm newSong={this.state.newSong}/>
           </div>
        )
    }
}

export default App;