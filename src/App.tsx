import { useState } from 'react'
import './App.css'
import Welcomepage from './page/welcomepage'
import Homepage from './page/homepage'
import AddDetails from './page/accountdetails'
import Deposit from './page/deposit'
import Withdrawal from './page/withdraw'
import Rate from './page/checkrate'

function App() {
 
  return (
  
    <>
    <div className=''>
      <Welcomepage/>
      <Homepage/>
      <Deposit/>
      <Withdrawal/>
      <AddDetails/>
      <Rate/>
    </div>
    </>
  )
}

export default App
