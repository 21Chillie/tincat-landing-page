import { createContext, useContext, useState, type ReactNode } from "react";

type providerValueType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const GlobalContext = createContext<providerValueType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

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
