import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/lib/firebase';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Function to handle logout
    const handleLogout = async () => {
      try {
        await auth.signOut();
        router.push('/'); // Redirect to homepage after successful logout
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    // Call the handleLogout function when the component mounts
    handleLogout();
  }, []);

  return null; // No content to render, just handling logout
};

export default Logout;
