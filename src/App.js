import { Toaster } from 'react-hot-toast';
import { About, Contact, Footer, Home, Portfolio, Technologies } from './components';
import { Aside, Main } from './layouts';
import './App.css';

// CSS files
import './assets/css/Aside.css';
import './assets/css/Home.css';
import './assets/css/Technologies.css';
import './assets/css/Portfolio.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className='App'>
      <Toaster position='bottom-center' containerClassName='toaster' />
      <Aside />
      <Home />
      <Main>
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
