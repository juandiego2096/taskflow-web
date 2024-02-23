"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import loginService from "../services/login.service";
const AUTH_TOKENS_KEY = "NEXT_JS_AUTH";

export const AuthContext = createContext({
  login: (username: string, password: string) => {},
  logout: () => {},
  isLoggedIn: false,
  authToken: null,
});

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  if (typeof window !== "undefined") {
    const authTokensInLocalStorage =
      window.localStorage.getItem(AUTH_TOKENS_KEY);
    const [authToken, setAuthToken] = useState(
      authTokensInLocalStorage === null
        ? null
        : JSON.parse(authTokensInLocalStorage)
    );

    const login = useCallback(function (username: string, password: string) {
      loginService(username, password).then((data) => {
        window.localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(data));
        setAuthToken(data);
      }).catch((err) => {
        console.log(err);
      });
    }, []);

    const logout = useCallback(function () {
      window.localStorage.removeItem(AUTH_TOKENS_KEY);
      setAuthToken(null);
    }, []);

    const value = useMemo(
      () => ({
        login,
        logout,
        authToken,
        isLoggedIn: authToken !== null,
      }),
      [authToken, login, logout]
    );

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }
}

export function useAuthContext() {
  return useContext(AuthContext);
}
