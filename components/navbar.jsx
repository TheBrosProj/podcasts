import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useAuth } from './AuthContext';



export default function NavBar() {
    const { user } = useAuth(); 
    console.log(user);
    // SetUser(auth.currentUser);

    return (
        <>
            <Flex align={'center'} justify={'space-between'} >
                <Flex alignItems="center" px="2rem" py="0.5rem" h="5rem">
                    <Link href="/">
                        <IconButton
                            as={Text}
                            icon={<FontAwesomeIcon href='/' icon={faPodcast} />}
                            color="white"
                            fontSize="3xl"
                            aria-label="Podcasts"
                        />
                    </Link>
                    <Box ml="1rem" fontSize="2xl" fontWeight="bold">
                        Podcasts
                    </Box>
                </Flex>
                {user == null ?
                    <Flex>
                        <Link href={'/login'}>
                            <Button as={Text} mr={'4'}>Log In</Button>
                        </Link>
                        <Link href={'/signup'}>
                            <Button as={Text} mr={'4'}>Sign Up</Button>
                        </Link>
                    </Flex>
                    :
                    <Flex>
                        <Link href={'/profile'}>
                            <Button as={Text} mr={'4'}>Profile</Button>
                        </Link>
                        <Link href={'/logout'}>
                            <Button as={Text} mr={'4'}>Logout</Button>
                        </Link>
                    </Flex>
                }
            </Flex>
        </>
    );
}
