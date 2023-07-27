import { useEffect, useState } from 'react';
import { Box, Image, Heading, Text, Flex, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons';
import TransitionDiv from '@/components/transition';
import Head from 'next/head';
import { useAudioPlayer } from './AudioPlayerContext';


export const Card = ({ _id, title, desc, aName, img }) => {
  const { setActiveId } = useAudioPlayer();
  return (
    <Box
    pos={'relative'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="0.3s"
      w="xs"
      h="md"
    >
      <Image w={'sm'} src={img} alt={title} borderRadius="lg" />
      <Box p="2">
        <Heading as="h5" size="md" mb="2">
          {title} 
        </Heading>
        <Heading as="h6" size={'sm'}>

          {aName}
        </Heading>
        <Text color="gray.600">
          {desc}
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton
        position={'absolute'}
        bottom={'4'}
          icon={<FontAwesomeIcon icon={faPlay} />}
          borderRadius="50%"
          bg="gray.200"
          color="gray.600"
          fontSize="lg"
          onClick={() => setActiveId(_id)}
        />
      </Box>
    </Box>
  );
};

const CardShowcase = ({ active, items, col }) => {
  // Sort the items based on _id to keep them in order
  const sortedItems = items.slice().sort((a, b) => a._id - b._id);
  let [overflow, setOverflow] = useState(0);
  let overflow_length = col;
  let canScrollRight = overflow < sortedItems.length - overflow_length;
  let canScrollLeft = overflow >= overflow_length;
  
    useEffect(()=>{
      canScrollLeft = overflow >= overflow_length;
      canScrollRight = overflow < sortedItems.length - overflow_length;
    },[overflow])
  
  const handleRightArrowClick = (event) => {
    if (canScrollRight) setOverflow(overflow + overflow_length);
  };

  const handleLeftArrowClick = (event) => {
    if (canScrollLeft) setOverflow(overflow - overflow_length);
  };

  const [isLargeScreen] = useMediaQuery('(min-width: 1200px)')
  const [isSmallScreen] = useMediaQuery('(max-width: 500px)')

  if(isLargeScreen){
    overflow_length=5;
  }
  if(isSmallScreen){
    overflow_length=1;
  }

  return (
    <Box h={'lg'} position="relative">
      <IconButton
        icon={<FontAwesomeIcon icon={faArrowLeft} />}
        borderRadius="50%"
        bg="gray.200"
        color="gray.600"
        fontSize="lg"
        onClick={handleLeftArrowClick}
        isDisabled={!canScrollLeft}
        position="absolute"
        top="50%"
        left="2"
        transform="translateY(-50%)"
      />
      <IconButton
        icon={<FontAwesomeIcon icon={faArrowRight} />}
        borderRadius="50%"
        bg="gray.200"
        color="gray.600"
        fontSize="lg"
        onClick={handleRightArrowClick}
        isDisabled={!canScrollRight}
        position="absolute"
        top="50%"
        right="2"
        transform="translateY(-50%)"
      />
      <Box display="flex" flexDirection="row" columnGap="1.5rem" margin="16">
        {sortedItems.slice(overflow, overflow + overflow_length).map((item) => (
          <Card key={(item._id).toString()} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default CardShowcase;