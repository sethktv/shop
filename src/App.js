import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';



function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
