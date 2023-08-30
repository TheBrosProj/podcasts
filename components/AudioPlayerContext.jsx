import React, { createContext, useContext, useState } from 'react';

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  const [activeId, setActiveId] = useState('');

  return (
    <AudioPlayerContext.Provider
      value={{
        activeId,
        setActiveId
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => useContext(AudioPlayerContext);
