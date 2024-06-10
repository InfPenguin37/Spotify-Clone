import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/constants';

export default function Body() {
  const[{token, selectedPlaylistID, selectedPlaylist}, dispatch] = useStateProvider();
  useEffect(()=> {
    const getInitialPlaylist = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistID}`,
        {
          headers: {
            Authorization: "Bearer "+ token,
            "content-type": "application/json" 
          }  
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a") ?"": response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({track}) =>({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist)=> artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number
        }))
      };
      dispatch({type: reducerCases.SET_PLAYLIST, selectedPlaylist})
    }
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistID])
  return (
    <Container>
      {
        selectedPlaylist && (
          <>
            <div className="playlist">
              <div className="image">
                <img src={selectedPlaylist.image} alt="selectedplaylistimage"/>
              </div>
              <div className="details">
                <span className='type'>PLAYLIST</span>
                <h1 className='title'>{selectedPlaylist.name}</h1>
                <p className='description'>{selectedPlaylist.description}</p>
              </div>
            </div>
          </>
        )
      }
    </Container>
  )
}


const Container = styled.div``;