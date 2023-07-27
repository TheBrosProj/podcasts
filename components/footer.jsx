import { Center, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <Center display={'block'} textAlign={'center'}>
        <Text>© 2023 by Nandan Varma. All rights reserved.</Text>
        <Text>Contact us: <Link href="mailto:nandanvarma@icloud.com" style={{ color: 'black' }}>nandanvarma@icloud.com</Link></Text>
      </Center>
    </footer>
  );
}

export default Footer;