import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/home/Home.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
