import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navigation/Navbar';
import ScrollToTopButton from './components/others/ScrollToTopButton';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTopButton />
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
