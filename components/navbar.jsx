import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function NavBar() {
    return (
        <>
            <Flex align={'center'} justify={'space-between'} >
                <Flex alignItems="center" px="2rem" py="0.5rem" h="5rem">
                    <Link href="/">
                        <IconButton
                            as={Text}
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
                <Flex>
                    <Link href={'/login'}>
                        <Button as={Text} mr={'4'}>Log In</Button>
                    </Link>
                    <Link href={'/signup'}>
                        <Button as={Text} mr={'4'}>Sign Up</Button>
                    </Link>
                </Flex>
            </Flex>
        </>
    );
}
