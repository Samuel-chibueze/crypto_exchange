import React, { useState } from 'react'
import { FaExchangeAlt } from 'react-icons/fa'

interface darkmode{
    darkMode : boolean
    
}
const ExchangeForm = ({ darkMode }:darkmode) => {
  const [fromCurrency, setFromCurrency] = useState('BTC')
  const [toCurrency, setToCurrency] = useState('ETH')
  const [amount, setAmount] = useState <number>(0)
  const [result, setResult] = useState(null)

  const handleExchange = (e: any) => {
    e.preventDefault()
    // Here you would typically make an API call to get the exchange rate
    const mockRate = 15 // 1 BTC = 15 ETH (this is just an example)
    const convertedAmount = parseFloat(amount) * mockRate
    setResult(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`)
  }

  return (
    <form onSubmit={handleExchange} className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${
              darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
            } border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </div>
        <div className="flex-1">
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${
              darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
            } border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </div>
      </div>
      <div>
        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
          className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${
            darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          } border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
      >
        <FaExchangeAlt className="mr-2" /> Exchange
      </button>
      {result && (
        <p className={`mt-4 text-center ${darkMode ? 'text-green-400' : 'text-green-600'} font-semibold`}>{result}</p>
      )}
    </form>
  )
}

export default ExchangeForm