import { useRouter } from 'next/router';
import { useAuth } from '../lib/useAuth';

export default function LogoutPage() {
  const router = useRouter();
  const auth = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/login');
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}