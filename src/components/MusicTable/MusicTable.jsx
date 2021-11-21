import React from 'react'

const MusicTable = (props) => {
 
    var songDisplay = props.music.map( song => {
        return (<table>
            <tr>
                <th>Song Title</th>
                <td>{song.title}</td>
                <th>Album</th>
                <td>{song.album}</td>
                <th>Artist</th>
                <td>{song.artist}</td>
                <th>Genre</th>
                <td>{song.genre}</td>
                <th>Release Date</th>
                <td>{song.release_date}</td>
                
            </tr>
            <td>
            
            
            
 
            </td>
            </table>)
    })
    return (
        <div>
            <h1>Songs in Library</h1>
            <ul className="song">
                {songDisplay}
            </ul>
            
        </div>
        
    );    
}
 
export default MusicTable;
