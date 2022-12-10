import logo from './logo.svg';
import './App.css';
import Likes from "./component/Likes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Likes likes='3'/>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
    </div>
  );
}

export default App;
