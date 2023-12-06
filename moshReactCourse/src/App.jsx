import Pages from './pages.jsx';
import Form from './form.jsx';
import './App.css'
import Footer from './footer.jsx';
import Calculator from './calculator.jsx';
import AiExample from './AIExample.jsx';

function App() {

  return (
    <div className='webpage'>
      <Pages />
      <Form /> 
      <Calculator />
      <AiExample /> 
      <Footer />     
    </div>
  );
}

export default App;