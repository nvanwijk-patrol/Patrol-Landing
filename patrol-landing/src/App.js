import {useState} from 'react';
import logo from './PatrolLogo.png';
import law from './law.png'
import stats from './stats.png'
import accessible from './accessible.png'
import solve from './solve.png'
import './App.css';
import audit from './AuditScreenshot.png';
import fix from './FixScreenshot.png';

function App() {
  const [isTestAuditPage, setIsTestAuditPage] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-div" onClick={() => setIsTestAuditPage(false)}>
          <img src={logo} className="App-logo" alt="A Saint Bernard Dog is the logo of Patrol" />
          <h1 className="Title">
            Patrol
          </h1>
        </div>
        <div className="Waitlist-button-div">
          <a
            className="Waitlist-button App-link"
            href="https://forms.fillout.com/t/atXrhSRNUzus"
            target="_blank"
            rel="noopener noreferrer">
            Join our Waitlist
          </a>
        </div>
      </header>
      {!isTestAuditPage ? (
      <>
      <div className='banner'>
        <div className="Tag-line-div">
          <h1 className="Tag-line">
            The AI-First <b>Web Accessibility</b><br/>and <b>ADA compliance</b> platform
          </h1>
          <p>We help Shopify brands and small businesses become accessible + ADA compliant by automating manual auditing,<br/> user-testing, and custom software development work</p>
        </div>
        <div className="Waitlist-button-div2">
          <button
            className="Audit-button"
            onClick={() => setIsTestAuditPage(true)}
            target="_blank"
            rel="noopener noreferrer">
            Audit Your Store Now
          </button>
        </div>
      </div>
      <div>
        <div className='section-2'>
        <h2 className="Stats-div-title">
          <b>Everyone deserves an equitable online experience.</b>
        </h2>
        <div className="Stats-div">
          <div className="Stats-div-item">
            <img src={accessible} className="sectional-cliparts" alt="A Saint Bernard Dog is the logo of Patrol" />
            <p className="Stats-div-item-text">
              <b>98%</b> of the web is inaccessible.
            </p>
          </div>
          <div className="Stats-div-item">
            <img src={law} className="sectional-cliparts" alt="A Saint Bernard Dog is the logo of Patrol" />
            <p className="Stats-div-item-text">
              <b>10+</b> SMBs are sued every day.
            </p>
          </div>
        </div>
        <div className="Stats-div">
          <div className="Stats-div-item">
            <img src={stats} className="sectional-cliparts" alt="A Saint Bernard Dog is the logo of Patrol" />
            <p className="Stats-div-item-text">
              <b>1 in 5</b> Americans are living with disabilities.
            </p>
          </div>
          <div className="Stats-div-item">
            <img src={solve} className="sectional-cliparts" alt="A Saint Bernard Dog is the logo of Patrol" />
            <p className="Stats-div-item-text">
              Accessibility overlays <b>do not</b> solve the issue.
            </p>
          </div>
        </div>
        </div>
        <div className='section-3'>
          <h2 className="Merchant-div-title">
            <b>Built for Shopify Merchants</b>
          </h2>
          <div className="Merchant-div">
            <img src={audit} className="Merchant-div-image" alt="A screenshot of the Patrol dashboard" />
            <p className="Merchant-div-text">
              Patrol is an embedded solution that sits inside your Shopify dashboard.
              See your accessibility issues and know exactly what page elements are causing them,
              and why they need to be fixed.
            </p>
          </div>
          <div className="Merchant-div Merchant-div2">
            <p className="Merchant-div-text">
              Patrol lets you deploy accessibility fixes directly in your dashboard.
              Unlike overlays, we fix your code at the <b>source</b> level, ensuring compliance.
            </p>
            <img src={fix} className="Merchant-div-image" alt="A screenshot of the Patrol App showing a fix" />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L40,149.3C80,139,160,117,240,106.7C320,96,400,96,480,128C560,160,640,224,720,234.7C800,245,880,203,960,154.7C1040,107,1120,53,1200,48C1280,43,1360,85,1400,106.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <div className='footer'>
          <div>
            <img src={logo} className="logo-large" alt="A cartoon of Saint, the AI agent" />
          </div>
          <div>
            <h2 className="release-date">
              Patrol is coming January 2025!
            </h2>
          </div>
          <div className='contactUs'>
            <p className="Merchant-div-text">
              Contact Us: <a href="mailto:hello@patrolapp.ai">hello@patrolapp.ai</a>
            </p>
          </div>
          <div className="Footer-div">
            <p className="Footer-text">© Patrol AI inc. 2024</p>
          </div>
        </div>
      </div>
      </>
      ) : (
        <iframe className="Test-audit-page" src="https://coat-boats-fancy-farm.trycloudflare.com/"></iframe>
      )}
    </div>
  );
}

export default App;
