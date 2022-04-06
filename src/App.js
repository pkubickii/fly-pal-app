import logo from './fplogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-name">
          FlyPal
        </div>
      </header>
      <div className='App-page'>
        <h3>Travel Planner</h3>
      </div>
    </div>
  );
}

export default App;
