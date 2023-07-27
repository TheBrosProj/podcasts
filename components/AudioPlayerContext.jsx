import React, { createContext, useContext, useState } from 'react';

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // New state to track audio loaded status
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [picture, setPicture] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [activeId, setActiveId] = useState(0);
  const [hidePlayer,setHidePlayer] = useState(false);

  return (
    <AudioPlayerContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        isLoaded,
        setIsLoaded,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        volume,
        setVolume,
        picture,
        setPicture,
        title,
        setTitle,
        artist,
        setArtist,
        activeId,
        setActiveId,
        hidePlayer,
        setHidePlayer,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => useContext(AudioPlayerContext);
