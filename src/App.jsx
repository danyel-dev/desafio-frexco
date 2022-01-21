import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios'

import Header from './components/Header'
import Home from './pages/Home';


export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      const fetchProducts = async () => {
      const { data } = await axios.get('/api/fruit/all');
      setProducts(data);
      } 

      fetchProducts()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      
      <Route 
        path="/"
        exact
        render={() => (
          <Home products={ products } />
        )}
      />
    </BrowserRouter>
  );
}
