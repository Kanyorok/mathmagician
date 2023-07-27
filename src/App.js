import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import QuoteApi from './components/QuoteApi';
import Header from './components/Header';
import Home from './components/Home';

function calcComponent() {
  return (
    <div className="bg-[#f7f7f7]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<QuoteApi />} />
        </Routes>
      </Router>
    </div>
  );
}

export default calcComponent;
