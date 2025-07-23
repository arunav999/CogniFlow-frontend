// ==================== 3rd-party Imports ====================
import { useState, createContext, useContext } from "react";

// ==================== Active Section Context ====================
// Provides context for tracking the currently active section in the UI
const ActiveSectionContext = createContext();

// Custom hook to access the active section context
export const useActiveSection = () => useContext(ActiveSectionContext);

// Provider component to wrap the app and provide active section state
export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
