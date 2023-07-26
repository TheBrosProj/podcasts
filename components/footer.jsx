import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <Text>© 2023 by Nandan Varma. All rights reserved.</Text>
      <Text>Contact us: <Link href="mailto:nandanvarma@icloud.com" style={{ color: '#fff' }}>nandanvarma@icloud.com</Link></Text>
    </footer>
  );
}

export default Footer;