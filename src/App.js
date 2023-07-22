import Calculator from './components/Calculator';
import QuoteApi from './components/QuoteApi';

function calcComponent() {
  return (
    <div className="mx-auto grid grid-cols-2 mt-14 overflow-hidden mb-2">
      <QuoteApi />
      <Calculator />

    </div>
  );
}

export default calcComponent;
