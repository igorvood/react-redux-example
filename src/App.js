import './App.css';
import Likes from "./component/Likes";
import Title from "./component/Title";
import Comments from "./component/Comments";

function App() {
    return (
        <div className="App">
            <div className="wrap">
                <div className="card">
                    <div className="card-img">
                        <Title/>
                        <Likes/>
                    </div>
                    <Comments/>
                </div>
            </div>
        </div>
    );
}

export default App;
