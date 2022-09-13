
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Customers from './Pages/Customers';
import Products from './Pages/Products';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/customers"
      element={<Customers/>}/>
       <Route path="/products"
      element={<Products/>}/>
</Routes>
     
    </div>
  );
}

export default App;
