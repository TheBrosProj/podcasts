import { useState, useEffect } from 'react';
import {firebase} from './firebase';

export function useAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const signOut = async () => {
    await firebase.auth().signOut();
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setAuthUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return { authUser, loading, signIn, signOut };
}