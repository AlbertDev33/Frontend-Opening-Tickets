import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  logIn(credentials: LoginCredentials): Promise<void>;
  logOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Alterdata:token');
    const user = localStorage.getItem('@Alterdata:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const logIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Alterdata:token', token);
    localStorage.setItem('@Alterdata:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('@Alterdata:token');
    localStorage.removeItem('@Alterdata:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
