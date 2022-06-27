import {Menu} from './components/Menu';
import {About} from './components/About';
import {MainPage} from './components/MainPage';
import {Footer} from './components/Footer';
import Projects from './components/Projects';
import './App.css';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState("main");

  return (
    <div className="App">
      <Menu setMenu={setMenu} />
      {menu === "main" && <MainPage setMenu={setMenu} />}
      {menu === "about" && <About setMenu={setMenu} />}
      {menu === "projects" && <Projects setMenu={setMenu} />}
      <Footer />
    </div>
  );
}

export default App;
