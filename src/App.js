import { Header } from "./components/Header/Header.js";
import { Hero } from "./components/Hero/Hero.js";
import { Customization } from "./components/Customization/Customization.js";
import { AboutUs } from "./components/AboutUs/AboutUs.js";
import { Catalog } from "./components/Catalog/Catalog.js";
import { Footer } from "./components/Footer/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Catalog />
      <Customization />
      <Footer />
    </div>
  );
}

export default App;
