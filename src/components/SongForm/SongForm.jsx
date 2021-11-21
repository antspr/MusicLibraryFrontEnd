import React, { Component } from 'react';



class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // although these are pk from database i think state may have to be an axios request to the create function on database
            album : ' ',
            artist : ' ',
            genre : ' ',
            release_date : ' ',
            title : ' ',


         }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }


    handleSubmit = (event) => {
        event.preventDefault();


    }

    
    render() { 
        
        console.log(this.state)
        return (  
            <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Album :</label>
                <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
                <label>Artist :</label>
                <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} /> 
                <label>Genre :</label>
                <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} /> 
                <label>Release date :</label>
                <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date} /> 
                <label>Title :</label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                <button type = "submit" onSubmit={(event) => this.handleSubmit(event)}>Add your Song!</button>
            </form>
        </div>
        );
    }
}
 
export default SongForm;