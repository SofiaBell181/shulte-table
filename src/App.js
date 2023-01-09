import './App.css';
import Header from './components/Header';
import About from './components/About';
import Game from './components/Game';
import History from './components/History';
import Footer from './components/Footer';
import HealthBenefits from './components/HealthBenefits';

function App() {
  return (
   <>
    <div className='pagewrap'>
        <Header />
        <About />
        <HealthBenefits />
        <Game/>
        <History />
        <Footer />
    </div>
   </>
  );
}

export default App;
