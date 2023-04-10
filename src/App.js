import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  );
}

export default App;
