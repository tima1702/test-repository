import logo from './logo.svg';
import './App.css';

function App() {
  const a = "My awesome React Project Add FIO";

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {a}
      </header>
    </div>
  );
}

export default App;
