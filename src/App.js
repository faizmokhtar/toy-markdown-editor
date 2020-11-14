import logo from './logo.svg';
import './App.css';
import MdText from './MdText.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Markdown Editor</h4>
      </header>
      <div>
        <MdText/>
      </div>
    </div>
  );
}

export default App;
