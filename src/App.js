import logo from './logo.svg';
import './App.css';
import Likes from "./component/Likes";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Likes store={store}/>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
    </div>
  );
}

export default App;
