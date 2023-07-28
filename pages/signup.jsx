import { useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Input, Button } from '@chakra-ui/react';
import { auth } from '../lib/firebase';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      router.push('/');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <Flex align="center" justify="center" mt={'32'} mb={'48'}>
      <Flex direction="column" p={8} rounded="md" shadow="md">
        <Heading mb={4}>Signup</Heading>
        <Input placeholder="Email" mb={4} value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="Password"
          mb={4}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="green" onClick={handleSignup}>
          Signup
        </Button>
      </Flex>
    </Flex>
  );
};

export default Signup;
