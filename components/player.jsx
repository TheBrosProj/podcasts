import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex, Text } from '@chakra-ui/react';
import { faPlay, faPause, faUndoAlt, faRedoAlt, faVolumeDown, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AudioPlayer = ({active}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    handleDurationChange();
  };

  useEffect(()=>{
    console.log("selected");
  },[active])

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
    <Box bg="gray.200" p={4} position="fixed" bottom={0} left={0} right={0}>
      <audio
        ref={audioRef}
        src="../hello.m4a"
        onTimeUpdate={handleTimeUpdate}
      />
      <Flex align="center" justify="space-between">
        <IconButton icon={<FontAwesomeIcon icon={faUndoAlt} />} aria-label="Backward 10s" onClick={handleBackward} />
        <IconButton icon={isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />} aria-label={isPlaying ? 'Pause' : 'Play'} onClick={handlePlayPause} />
        <IconButton icon={<FontAwesomeIcon icon={faRedoAlt} />} aria-label="Forward 10s" onClick={handleForward} />
      </Flex>
      <Flex align="center" justify="space-between" mt={2}>
        <Text mr={4}>{formatTime(currentTime)}</Text>
        <Slider flex={1} value={currentTime} max={duration} onChange={handleTimeSeek}>
          <SliderTrack>
            <SliderFilledTrack bg="blue.500" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        <Text ml={6}>{formatTime(duration)}</Text>
      </Flex>
      <Flex align="center" mt={2}>
        <IconButton mr={4} icon={<FontAwesomeIcon icon={faVolumeDown} />} aria-label="Volume Down" />
        <Slider flex={1} value={volume} onChange={handleVolumeSeek}>
          <SliderTrack>
            <SliderFilledTrack bg="blue.500" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        <IconButton ml={4} icon={<FontAwesomeIcon icon={faVolumeUp} />} aria-label="Volume Up" />
      </Flex>
    </Box>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default AudioPlayer;
