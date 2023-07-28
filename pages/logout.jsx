import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await auth.signOut();
        router.push('/');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    handleLogout();
  }, []);

  return null;
};

export default Logout;
