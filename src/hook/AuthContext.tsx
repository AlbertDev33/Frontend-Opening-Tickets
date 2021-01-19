import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  logIn(credentials: LoginCredentials): Promise<void>;
  logOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AppTicket:token');
    const user = localStorage.getItem('@AppTicket:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const logIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user }: AuthState = response.data;

    localStorage.setItem('@AppTicket:token', token);
    localStorage.setItem('@AppTicket:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('@AppTicket:token');
    localStorage.removeItem('@AppTicket:user');
    localStorage.removeItem('@AppTicket:roles');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
