import photo from './pfp.png';
import github from './github64.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="the developer, a 24 year old, smiling" />
        <h1>
          this is ~soon~ my portfolio
        </h1>
        <p>
          the page is under construction
        </p>
        <a
          className="App-link"
          href="https://github.com/Kristaver"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={github} className="github-logo" alt="github logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
