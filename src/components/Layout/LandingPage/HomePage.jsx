// Section Hook
import { useActiveSectionObserver } from "../../../hooks/useActiveSectionObserver";

// Custom components
import Header from "./Header/Header";
import Main from "../Main/Main";
import Footer from "./Footer/Footer";

const HomePage = () => {
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
