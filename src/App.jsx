// Section hook
import { useActiveSectionObserver } from "./hooks/useActiveSectionObserver";

// My custom components
import Header from "./components/Layout/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Layout/Footer/Footer";

const App = () => {
  useActiveSectionObserver();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
