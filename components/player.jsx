import { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex, Text, SliderMark } from '@chakra-ui/react';
import { faPlay, faPause, faBackward, faForward, faUndoAlt, faRedoAlt, faVolumeDown, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAudioPlayer } from './AudioPlayerContext';
import { useRouter } from 'next/router';
import test_audio from '@/public/Hello.m4a'

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const router = useRouter();
  const {
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
    title,
    artist,
    active,
    hidePlayer
  } = useAudioPlayer();


  useEffect(() => {
    const handleRouteChange = () => {
      if (isPlaying && isLoaded) {
        audioRef.current.pause();
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isPlaying, isLoaded, router]);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [volume, setVolume] = useState(100);

  const handlePlayPause = () => {

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    }
    setIsPlaying(true);
  }

  const handlePause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  }

  useEffect(() => {
    console.log(active);
  }, [active])

  const handleBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleTimeSeek = (value) => {
    audioRef.current.currentTime = value;
  };

  const handleVolumeSeek = (value) => {
    audioRef.current.volume = value / 100;
    setVolume(value);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleDurationChange = () => {
    setDuration(audioRef.current.duration);
    console.log("Changed");
  };

  return (
    <>
      {!hidePlayer &&
        <Box h={'36'} m={4} bg="blackAlpha.800" p={2} position="fixed" bottom={0} left={0} right={0} borderRadius={'3xl'} borderColor={'gray.500'} borderWidth={'2px'}>
          <audio
            onPause={handlePause}
            onPlay={handlePlay}
            ref={audioRef}
            src={'../Hello.m4a'}
            onTimeUpdate={handleTimeUpdate}
          />
          <Flex align="center" justify="center" gap={'8'}>
            <IconButton icon={<FontAwesomeIcon size='xl' icon={faBackward} />} aria-label="Backward 10s" onClick={handleBackward} />
            <IconButton icon={isPlaying ? <FontAwesomeIcon size='2xl' icon={faPause} /> : <FontAwesomeIcon size='2xl' icon={faPlay} />} aria-label={isPlaying ? 'Pause' : 'Play'} onClick={handlePlayPause} />
            <IconButton icon={<FontAwesomeIcon size='xl' icon={faForward} />} aria-label="Forward 10s" onClick={handleForward} />
          </Flex>
          <Flex align="center" justify="space-between" mt={2}>

            <Text mr={4}>{formatTime(currentTime)}</Text>
            <Slider focusThumbOnChange={false} key={active} flex={1} value={currentTime} max={duration} onChange={handleTimeSeek}>
              <SliderTrack>
                <SliderFilledTrack bg="grey" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
            <Text ml={6}>{formatTime(duration)}</Text>
          </Flex>
          <Flex align="center" my={2}>
            <IconButton mr={4} icon={<FontAwesomeIcon icon={faVolumeDown} />} aria-label="Volume Down" />
            <Slider flex={1} value={volume}
              onChange={handleVolumeSeek}
            >
              <SliderTrack>
                <SliderFilledTrack bg="grey" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
            <IconButton ml={4} icon={<FontAwesomeIcon icon={faVolumeUp} />} aria-label="Volume Up" />
          </Flex>
        </Box>}
    </>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default AudioPlayer;
