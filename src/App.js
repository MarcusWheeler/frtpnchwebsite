import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  const videoId = 'pn77HwlK0rI';

  // Discord link using the server ID
  const discordLink = `https://discord.gg/r58hbTREAS`;
  const powerRankingsImage = process.env.PUBLIC_URL + 'pr.jpg';
    return (
    <div>
      <h1>Hello, World!</h1>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        playing={true} // Set to true for autoplay
        controls={true} // Show video controls
        width="640px"
        height="360px"
        muted={true}  // Mute the video
      />
      <p>
        Join our Discord community: <a href={discordLink} target="_blank" rel="noopener noreferrer">Click here</a>
      </p>
      <p>
        Power Rankings:
        {/* Display the image directly on the page */}
        <img src={powerRankingsImage} alt="Power Rankings" style={{ maxWidth: '100%' }} />
      </p>
    </div>
  );
}

export default App;

