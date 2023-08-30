import { Center, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer>
      <Center h={'xs'} display={'block'} textAlign={'center'}>
        <Text mt={8}>© 2023 by TheBrosProj Team. All rights reserved.</Text>
        <Text>Contact us: <Link href="mailto:nandanvarma@icloud.com" style={{ color: 'grey' }}>nandanvarma@icloud.com</Link></Text>
      </Center>
    </footer>
  );
}

export default Footer;