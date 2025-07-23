// ==================== 3rd-party Imports ====================
// Custom hook for section observer
import { useActiveSectionObserver } from "../../../hooks/useActiveSectionObserver";

// ==================== Page Components ====================
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

// ==================== Home Page Component ====================
// Main landing page layout with header, main content, and footer
const HomePage = () => {
  // Initialize section observer for scroll-based navigation
  useActiveSectionObserver();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default HomePage;
