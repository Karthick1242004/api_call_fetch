import './App.css';
import Counter from './components/Counter';
import Zustandcart from './components/Zustandcart';
import Zustand from './components/Zustandproduct';

function App() {
  return (
    <div className='form'>
      <Zustand />
      <Zustandcart />
      <Counter/>
    </div>
  );
}

export default App;
