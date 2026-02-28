import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import { type ThemeType, selectedTheme } from "../content/setTheme";

type providerValueType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const GlobalContext = createContext<providerValueType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme] = useState<ThemeType>(selectedTheme || "caramellatte");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const changeTheme = (themeName: ThemeType | "") => {
    const html = document.documentElement;
    if (!themeName) {
      html.setAttribute("data-theme", "caramellatte");
      return;
    }

    html.setAttribute("data-theme", themeName);
  };

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function UseGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within AppProvider");
  }

  return context;
}
