import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {//<img src={logo} className="App-logo" alt="logo" />
        }
        <h1 className="Title">
          Patrol
        </h1>
        <h3 className="Tag-line">
          The AI first compliance platform for SMB Shopify merchants
        </h3>
        <button className="Waitlist-button" aria-label="Join our Waitlist">
          <a  
          className="App-link"
          href="https://forms.gle/Mh3job9QHU2HWkza8"
          target="_blank"
          rel="noopener noreferrer">
            Join our Waitlist
          </a>
        </button>
      </header>
    </div>
  );
}

export default App;
