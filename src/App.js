import './App.css';
import { Aside, Main } from './layouts';
import { About, Contact, Home, Portfolio, Technologies } from './components';

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
      <Aside />
      <Home />
      <Main>
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </Main>
    </div>
  );
}

export default App;
