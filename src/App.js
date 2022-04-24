import { Counter } from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter data={3} />
      </header>
    </div>
  );
}

export default App;
