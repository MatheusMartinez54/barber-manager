import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth, googleProvider } from '../firebase/firebaseConfig';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser ? { uid: currentUser.uid, email: currentUser.email } : null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login realizado com sucesso');
    } catch (error) {
      const message =
        error.code === 'auth/invalid-api-key' || error.message?.includes('YOUR_API_KEY')
          ? 'Configure suas credenciais Firebase em src/firebase/firebaseConfig.js.'
          : 'Não foi possível entrar. Verifique seus dados.';
      toast.error(message);
      throw error;
    }
  };

  const registerWithEmail = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Conta criada com sucesso');
    } catch (error) {
      toast.error('Falha ao criar conta');
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Login com Google realizado');
    } catch (error) {
      toast.error('Não foi possível entrar com Google');
      throw error;
    }
  };

  const sendResetEmail = async email => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Email de recuperação enviado');
    } catch (error) {
      toast.error('Falha ao enviar o email');
      throw error;
    }
  };

  const logout = async () => {
    await signOut(auth);
    toast.success('Desconectado');
  };

  const value = useMemo(
    () => ({ user, loading, loginWithEmail, loginWithGoogle, registerWithEmail, sendResetEmail, logout }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
