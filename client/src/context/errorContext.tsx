"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// -------------- Components ------------- \\
import ErrorCard from "@/components/errors/errorCard";

export const ErrorContext = createContext<any>(null);

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [errors, setErrors] = useState<object[]>([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timeoutId = setTimeout(() => {
        setErrors([]);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [errors]);

  return (
    <ErrorContext.Provider value={{ errors, setErrors }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useErrorContext = () => {
  const context = useContext(ErrorContext);

  if (!context)
    throw new Error("useError should be within ErrorContext Provider!");

  return context;
};
