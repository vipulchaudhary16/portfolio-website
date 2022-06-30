import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
