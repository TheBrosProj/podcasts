import { useState, useRef, useEffect } from 'react';
import { useAudioPlayer } from './AudioPlayerContext';
import AudioPlayer from 'react-h5-audio-player';
import { useRouter } from 'next/router';
import { Box, Center } from '@chakra-ui/react';

const Player = () => {
  const {
    activeId
  } = useAudioPlayer();
  const [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    if (activeId != '') {
      const handleGetPodcast = async () => {
        // try {
        //   const response = await fetch(`/api/getFile?fileId=${activeId}`);
        //   if (!response.ok) {
        //     throw new Error('Network response was not ok');
        //   }

        //   const blob = await response.blob();
        //   const objectURL = URL.createObjectURL(blob);

        //   audioRef.current.src = objectURL;
        //   audioRef.current.play();
        //   setIsPlaying(true);
        // } catch (error) {
        //   console.error('Error loading audio:', error);
        // }
      };
      handleGetPodcast();
      console.log("active id changed");
      setCurrentUrl('/Hello.m4a')
    }
  }, [activeId]);


  return (
    <>
      <Center>
        <Box pos="fixed" bottom="0">
        <AudioPlayer
          // autoPlay
          src={currentUrl}
          // onEnded={handleNextSong}
          showSkipControls
          // onClickNext={handleNextSong}
          // onClickPrevious={handlePrevSong}
          showJumpControls={false}
        />
      </Box>
    </Center >
    </>
  );
};

export default Player;
