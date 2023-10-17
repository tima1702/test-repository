import './App.css';

function App() {
  const greeting = "Это тестовый проект ФИО";

  console.log('This is App ');
  return (
    <div className="App">
     <header className="App-header">
         {greeting}
      </header>
    </div>
  );
}

export default App;
