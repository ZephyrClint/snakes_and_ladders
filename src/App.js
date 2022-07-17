import './App.css';
import Dice from './components/Dice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Dice/>
      <Board/>
    </div>
  );
}

export default App;
