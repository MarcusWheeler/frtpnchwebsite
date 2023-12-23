import React from 'react';
import { DiscordWidget } from 'react-discord-widget';

const DiscordLink = () => {
  return (
    <div>
      <h2>Discord</h2>
      <DiscordWidget server="900478231231217714" /> {/* Replace with your actual Discord server ID */}
    </div>
  );
};

export default DiscordLink;

