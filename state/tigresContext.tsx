import { createContext, useContext, useEffect, useState } from "react";

interface ITigresConfiguration {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const TigresConfigurationContext = createContext<ITigresConfiguration | null>(
  null
);

export const TigresConfigurationProvider = (
  props: React.PropsWithChildren<{}>
) => {
  const [darkMode, _setDarkMode] = useState(true);

  useEffect(() => {
    _setDarkMode(
      localStorage.darkMode ? localStorage.darkMode === "true" : true
    );
  }, []);

  const setDarkMode = (value: boolean) => {
    localStorage.darkMode = value;
    _setDarkMode(value);
  };

  return (
    <TigresConfigurationContext.Provider
      value={{ darkMode, setDarkMode }}
      {...props}
    />
  );
};

export function useTigresConfiguration(): ITigresConfiguration {
  const tigres = useContext(TigresConfigurationContext);

  if (!tigres) {
    throw new Error("Cannot use the useTigres hook without a TigresProvider");
  }

  return tigres;
}
