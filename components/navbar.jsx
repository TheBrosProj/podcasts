import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

// import { user } from '../lib/auth'
export default function NavBar() {
    return (
        <>
            <Flex className='navbar' alignItems="center" px="2rem" py="0.5rem" h="5rem">
                <Link href="/">
                    <IconButton
                        icon={<FontAwesomeIcon href='/' icon={faPodcast} />}
                        color="grey"
                        fontSize="xl"
                        aria-label="Podcasts"
                        _hover={{ color: 'black' }}
                    />
                </Link>
                <Box ml="1rem" fontSize="2xl" fontWeight="bold" color="black">
                    Podcasts
                </Box>
            </Flex>
        </>
    );
}
