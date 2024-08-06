import { getCurrentUser } from "@/lib/appwrite";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the user object structure based on what getCurrentUser returns
interface User {
  id?: string;
  name?: string;
  email?: string;
}

// Define the context value type
interface GlobalContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
  setUser: any;
  isLoading: boolean;
}

// Create the Global Context with an initial undefined value
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Custom hook to use the Global Context
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

// TypeScript interface for props
interface GlobalProviderProps {
  children: ReactNode;
}

// GlobalProvider component
const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initially true to show loading state

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser({});
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
