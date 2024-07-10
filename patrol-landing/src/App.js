import logo from './PatrolLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-div">
          <img src={logo} className="App-logo" alt="A Saint Bernard Dog is the logo of Patrol" />
          <h1 className="Title">
            Patrol
          </h1>
        </div>
        <h3 className="Tag-line">
          The AI-first accessibility compliance platform for Shopify
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
