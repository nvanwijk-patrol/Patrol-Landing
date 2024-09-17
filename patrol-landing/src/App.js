import {useState} from 'react';
import logo from './PatrolLogo.png';
import './App.css';
import accessibilityBanner from './AccessibilityBanner.webp'
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
            href="https://forms.gle/Mh3job9QHU2HWkza8"
            target="_blank"
            rel="noopener noreferrer">
            Join our Waitlist
          </a>
        </div>
      </header>
      <hr />
      {!isTestAuditPage ? (
      <>
      <div className="Tag-line-div">
        <h2 className="Tag-line">
          An AI-First <b>accessibility</b> and <b>ADA compliance</b> platform for Shopify Merchants.
        </h2>
      </div>
      <div className="Waitlist-button-div">
        <button
          className="Audit-button"
          onClick={() => setIsTestAuditPage(true)}
          target="_blank"
          rel="noopener noreferrer">
          Audit Your Store Now
        </button>
      </div>
      <div>
        <img src={accessibilityBanner} className="banner" alt="A cartoon banner showing differentely abled individuals" />
      </div>
      <div>
        <h2 className="Stats-div-title">
          <b>Everyone deserves an equitable online experience.</b>
        </h2>
        <div className="Stats-div">
          <div className="Stats-div-item">
            <span className="stats-star">
              *
            </span>
            <p className="Stats-div-item-text">
              <b>98%</b> of the web is inaccessible.
            </p>
          </div>
          <div className="Stats-div-item">
            <span className="stats-star">
              *
            </span>
            <p className="Stats-div-item-text">
              <b>10+</b> SMBs are sued every day.
            </p>
          </div>
        </div>
        <div className="Stats-div">
          <div className="Stats-div-item">
            <span className="stats-star">
              *
            </span>
            <p className="Stats-div-item-text">
              <b>20%</b> of the US population has a disability.
            </p>
          </div>
          <div className="Stats-div-item">
            <span className="stats-star">
              *
            </span>
            <p className="Stats-div-item-text">
              Accessibility overlays <b>do not</b> solve the issue.
            </p>
          </div>
        </div>
        <div>
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
          <div className="Merchant-div">
            <p className="Merchant-div-text">
              Patrol lets you deploy accessibility fixes directly in your dashboard.
              Unlike overlays, we fix your code at the <b>source</b> level, ensuring compliance.
              Also, all changes are first added to a preview theme for your approval.
            </p>
            <img src={fix} className="Merchant-div-image" alt="A screenshot of the Patrol App showing a fix" />
          </div>
        </div>
        <div>
          <p className="Merchant-div-text">
            Our AI agent, Saint, will monitor your site for new accessibility issues, and send you a report when they're found!
          </p>
          <div>
            <img src={logo} className="logo-large" alt="A cartoon of Saint, the AI agent" />
          </div>
          <div>
            <h2 className="release-date">
              Patrol is coming January 2025!
            </h2>
          </div>
          <div className="Waitlist-button-div">
            <a
              className="Waitlist-button App-link large-button"
              href="https://forms.gle/Mh3job9QHU2HWkza8"
              target="_blank"
              rel="noopener noreferrer">
              Join our Waitlist
            </a>
          </div>
          <div>
            <p className="Merchant-div-text">
              Or email us at <a href="mailto:hello@patrolapp.ai">hello@patrolapp.ai</a> if you are interested in being an early design partner.
            </p>
          </div>
        </div>
      </div>
      </>
      ) : (
        <iframe className="Test-audit-page" src="https://shopify.patrolapp.ai/"></iframe>
      )}
      <hr/>
      <div className="Footer-div">
        <p className="Footer-text">© Patrol AI inc. 2024</p>
      </div>
    </div>
  );
}

export default App;
