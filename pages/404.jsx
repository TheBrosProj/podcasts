import { Button, Center, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <Center display={'grid'} my={'256'}>
      <Heading>404 - Page Not Found</Heading>
      {/* <Link href="/">
        <Button as={Text}>
        Go back home
        </Button>
      </Link> */}
    </Center>
  )
}