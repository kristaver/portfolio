import {Menu} from './components/Menu';
import {About} from './components/About';
import {MainPage} from './components/MainPage';
import {Footer} from './components/Footer';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [menu, setMenu] = useState("main");

  return (
    <div className="App">
      <Menu setMenu={setMenu} />
      {menu === "main" && <MainPage setMenu={setMenu} />}
      {menu === "about" && <About setMenu={setMenu} />}
      <Footer />
    </div>
  );
}

export default App;
