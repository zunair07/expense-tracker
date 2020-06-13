import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export default function Balance () {

    let {transactions} = useContext(GlobalContext)

    let amounts = transactions.map(transaction => transaction.amount);

    let total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
   return ( 
       <>
   <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
   );
}