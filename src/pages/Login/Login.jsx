import React from "react";
import { Container } from "./Style";

function Login() {
  const handleOnClick = () => {
    const client_id = "e5aaf58d1d794372966c8183ca9f74d3";
    const redirect_uri = "http://localhost:3000/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <>
      <Container>
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
          alt="spotify"
        />
        <button onClick={handleOnClick}>Login with Spotify</button>
      </Container>
    </>
  );
}

export default Login;
