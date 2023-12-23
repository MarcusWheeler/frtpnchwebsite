import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = () => {
  const videoId = 'dQw4w9WgXcQ'; // Replace with your actual YouTube video ID

  return (
    <div>
      <h2>YouTube Video</h2>
      <YouTube videoId={videoId} />
    </div>
  );
};

export default YouTubeVideo;

