import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios'

import Header from './components/Header'
import Home from './pages/Home';
import Carrinho from './pages/Carrinho'


export default function App() {
  const [products, setProducts] = useState([])
  const [carrinho, setCarrinho] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/fruit/all');

      const newData = data.map(fruit => {
        fruit.preco = (Math.random() * 10).toFixed(2)
        return fruit
      })
      setProducts(newData);
    } 
    
    fetchProducts()
  }, [])
  

  function handleProductsAdittion(product) {
    const newCarrinho = [...carrinho, product]
    setCarrinho(newCarrinho)
  }

  function handleProductsRemove(ProductId) {
    const newCarrinho = carrinho.filter(Item => Item.id !== ProductId)
    setCarrinho(newCarrinho)
  }

  return (
    <BrowserRouter>
      <Header />
      
      <Route 
        path="/"
        exact
        render={() => (
          <Home products={ products } handleProductsAdittion={ handleProductsAdittion } />
        )}
      />

      <Route 
        path="/carrinho"
        exact
        render={() => <Carrinho carrinho={ carrinho } handleProductsRemove={ handleProductsRemove } />}
      />
    </BrowserRouter>
  );
}
