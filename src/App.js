import About from './Component/About';
import Contact from './Component/Contact';
import Experties from './Component/Experties';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Portfolio from './Component/Portfolio';
import './index.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Portfolio />
            <Experties />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
