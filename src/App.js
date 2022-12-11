import './App.css';
import Likes from "./component/Likes";
import Title from "./component/Title";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Title/>
                <Likes/>

            </header>
        </div>
    );
}

export default App;
