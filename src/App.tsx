import "./App.css";
import Centers from "./components/Centers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PhilosophySection from "./components/PhilosophySection";
import Programs from "./components/Programs";
import Registration from "./components/Registration";
import WelcomeSection from "./components/WelcomeSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <PhilosophySection />
      <Programs />
      <Centers />
      <Registration />
      <Footer />
    </>
  );
}

export default App;
