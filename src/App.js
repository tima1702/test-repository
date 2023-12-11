import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект ФИО, здравствуйте";
  return (
    <div className="App">
     <header className="App-header">
         {greeting}
      </header>
    </div>
  );
}

export default App;
