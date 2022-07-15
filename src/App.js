import './App.css';
import { Aside, Main, Footer } from './layouts';
import { About, Contact, Home, Portfolio, Technologies } from './components';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// CSS files
import './assets/css/Aside.css';
import './assets/css/Home.css';
import './assets/css/Technologies.css';

function App() {
  return (
    <div className='App'>
      <Aside />
      <Home />
      <Main>
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
        <Footer />
      </Main>
    </div>
  );
}

export default App;
