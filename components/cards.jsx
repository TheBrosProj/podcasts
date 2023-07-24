import React, { useState } from 'react';
import { Box, Image, Heading, Text, Flex, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TransitionDiv from '../components/transition';

export const Card = ({ active, title, desc, aName, img }) => {
  return (
    <Box className="card" p="4" borderRadius="xl" boxShadow="md">
      <Image src={img} alt={title} borderRadius="xl" />
      <Box mt="4">
        <Heading as="h5" size="md" fontWeight="bold">
          {title} by {aName}
        </Heading>
        <Text mt="2" color="gray.600">
          {desc}
        </Text>
      </Box>
      <Flex mt="4" justifyContent="center">
        <IconButton
          aria-label="Play"
          icon={<FontAwesomeIcon icon={faPlay} />}
          variant="outline"
          onClick={() => {
            active(_id);
          }}
        />
      </Flex>
    </Box>
  );
};

const CardShowcase = ({ active, items, col }) => {
  let [overflow, setOverflow] = useState(0);
  const overflowLength = col;

  const handleRightArrowClick = () => {
    if (overflow < items.length - overflowLength) setOverflow(overflow + overflowLength);
  };

  const handleLeftArrowClick = () => {
    if (overflow >= overflowLength) {
      setOverflow(overflow - overflowLength);
    }
  };

  return (
    <Box className="card-showcase" position="relative">
      {overflow >= overflowLength && (
        <IconButton
          icon={<FontAwesomeIcon icon={faArrowLeft} />}
          className="left"
          borderRadius="50%"
          position="absolute"
          top="50%"
          left="1vh"
          p="1"
          onClick={handleLeftArrowClick}
        />
      )}
      <Flex className="cards-section" mt="8" justifyContent="flex-end" columnGap="1.5rem">
        {items.slice(overflow, overflow + overflowLength).map((item) => (
          <Card active={active} key={(item._id).toString()} {...item} />
        ))}
      </Flex>
      {overflow < items.length - overflowLength && (
        <IconButton
          size="xs"
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          className="right"
          borderRadius="50%"
          position="absolute"
          top="50%"
          right="1vh"
          p="1"
          onClick={handleRightArrowClick}
        />
      )}
    </Box>
  );
};

export default CardShowcase;
