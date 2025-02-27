import React from 'react';

import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/Header/header-component';


function App() {
  return (
    <div>
      <Header/>
      <switch>
      <Route exact path='/' component = { HomePage } />
      <Route path='/shop' component = { ShopPage } />
      <Route exact path='/signin' component = { SignInAndSignUpPage } />
      </switch>
    </div>
  );
  
}

export default App;
