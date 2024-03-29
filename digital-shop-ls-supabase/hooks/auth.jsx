// hooks/auth.jsx
import useSupabase from '../hooks/supabase';
import useStore from '../store/supaStore';
import { useState } from 'react';

const useAuth = () => {
  const [signupData, setSignupData] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const [error, setError] = useState(null);

  // const supabase = useSupabase();

  const setUserState = useStore((state) => state.setUserState);

  const signup = async (email, password, firstName, lastName) => {
    try {
      const { data, error } = await useSupabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            firstName,
            lastName,
          },
        },
      });
      if (!error) {
        setSignupData(data);
      } else {
        setError(error);
      }
    } catch (e) {
      console.error('Error while creating an user please try agaiin!');
      setError(e);
    }
  };

  const login = async (email, password) => {
    try {
      const { data, error } = await useSupabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!error) {
        const { session, user } = data;
        setLoginData(data);
        setUserState({
          isLoggedIn: true,
          email: user.email,
          firstName: user.user_metadata.firstName,
          lastName: user.user_metadata.lastName,
          accessToken: session.access_token,
        });
      } else {
        setError(error);
      }
    } catch (error) {
      console.error('Invalid credenntials', error);
      setError(error);
    }
  };

  return { login, loginData, signup, signupData, error };
};

export default useAuth;
