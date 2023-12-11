import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "я тут поменял для сем вирсиона";
  return (
    <div className="App">
     <header className="App-header">
         {greeting}
      </header>
    </div>
  );
}

export default App;
