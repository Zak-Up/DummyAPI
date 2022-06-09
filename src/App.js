import './App.css';
import ContactForm from './components/ContactForm';
import Products from './components/Products';
import Users from './components/Users';

function App() {

  return (
    <div className="App">
      <h1>Practicas</h1>
      <ContactForm/>
      <Users/>
      <Products/>
    </div>
  );
}

export default App;
