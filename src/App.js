import photo from './pfp.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <h1>
          this is my portfolio ~ to be ~
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
          github
        </a>
      </header>
    </div>
  );
}

export default App;
