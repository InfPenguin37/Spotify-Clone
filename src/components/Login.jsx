import React from 'react';
import styled from 'styled-components';

export default function Login() {
    const handleClick = () => {
        const clientID = "5cb42c2f79b74e8180739985c2b5d589";
        const redirectURL = "http://localhost:3000/";
        const apiURL = "https://accounts.spotify.com/authorize"
        const scope = [
            "user-read-email", 
            "user-read-private", 
            "user-read-playback-state", 
            "user-modify-playback-state", 
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
            "user-read-recently-played"
        ];
        window.location.href = `${apiURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    };
    return (
        <Container>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" alt="Spotify Logo"/>
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: black;
    gap: 5rem;
    img {
        height: 20vh;
    }
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: #1db954;
        color: black;
        font-size: 1.4rem;
        curson: pointer;
    }
`;