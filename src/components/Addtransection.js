import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export default function Addtransection (){
    let [text, settext] = useState('')
    let [amount, setamount] = useState(0)

    let { AddTransaction } = useContext(GlobalContext)

    let Submit= e =>{
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: +amount
      } 
  
     AddTransaction(newTransaction);
    }

  

    return(
        <>
        <h3>Add new transaction</h3>
      <form onSubmit={Submit}>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" value={text} onChange={(event)=> settext(event.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount">Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(event)=> setamount(event.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
      </>

    );
}