import { TopBar } from './components/sections/TopBar';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Advantages } from './components/sections/Advantages';
import { Products } from './components/sections/Products';
import { GlobalReach } from './components/sections/GlobalReach';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />
      <Hero />
      <Stats />
      <Advantages />
      <Products />
      <GlobalReach />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
