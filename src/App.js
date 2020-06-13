import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExp from './components/IncomeExp';
import Transactionlist from './components/Transactionlist';
import Addtransection from './components/Addtransection';
import { GlobalProvider } from './context/GlobalState';
import './App.css';


function App() {
  return (
    <GlobalProvider>

      <Header />
     
     <div className="container">
      <Balance />
      
      <IncomeExp />
      <Transactionlist />
      <Addtransection />
      </div>

      </GlobalProvider>

  );
}

export default App;
