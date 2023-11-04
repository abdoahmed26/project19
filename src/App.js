import './App.css';
import About from './component/about';
import Body from './component/body';
import Chefs from './component/chefs';
import Choose from './component/choose';
import Feature from './component/feature';
import Footer from './component/footer';
import Gallery from './component/gallery';
import Menu from './component/menu';
import Navbar from './component/navbar';
import Offer from './component/offer';
import Rate from './component/rate';
import Test from './component/test';

function App() {
  return (
    <div className="App scroll-smooth">
        <Navbar />
        <Body />
        <About />
        <Feature />
        <Menu/>
        <Choose />
        <Rate/>
        <Gallery/>
        <Offer/>
        <Chefs/>
        <Test/>
        <Footer/>
    </div>
  );
}

export default App;
