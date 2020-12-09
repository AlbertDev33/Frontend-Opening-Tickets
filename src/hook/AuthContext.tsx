import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

// interface UserRoles {
//   id: string;
//   description: string;
//   name: string;
// }

interface AuthState {
  token: string;
  user: User;
  userRoles: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  userRoles: string;
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
    const userRoles = localStorage.getItem('@AppTicket:roles');

    if (token && user && userRoles) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
        userRoles: JSON.parse(userRoles),
      };
    }

    return {} as AuthState;
  });

  const logIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user, userRoles }: AuthState = response.data;

    localStorage.setItem('@AppTicket:token', token);
    localStorage.setItem('@AppTicket:user', JSON.stringify(user));
    localStorage.setItem('@AppTicket:roles', JSON.stringify(userRoles));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user, userRoles });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('@AppTicket:token');
    localStorage.removeItem('@AppTicket:user');
    localStorage.removeItem('@AppTicket:roles');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, userRoles: data.userRoles, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
