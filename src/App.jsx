import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Route 
        path="/"
        exact
        render={() => (
          <Home />
        )}
      />
    </BrowserRouter>
  );
}
