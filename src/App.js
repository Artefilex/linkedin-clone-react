
import './App.css';
import Header from './components/Header';
import { OpacityProviver } from './context/OpacityContex';
function App() {
  return (
    <div className="App">
     <OpacityProviver>
       <Header/>
     </OpacityProviver>
    </div>
  );
}

export default App;
