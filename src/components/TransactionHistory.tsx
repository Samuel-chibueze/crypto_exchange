import React from 'react'
import { FaExchangeAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa'


interface darkmode{
    darkMode : boolean
}
const TransactionHistory = ({ darkMode }: darkmode) => {
  // This is mock data. In a real application, you would fetch this from an API
  const transactions = [
    { id: 1, type: 'exchange', from: 'BTC', to: 'ETH', amount: 0.5, date: '2023-05-01' },
    { id: 2, type: 'deposit', currency: 'BTC', amount: 1, date: '2023-04-28' },
    { id: 3, type: 'withdraw', currency: 'ETH', amount: 5, date: '2023-04-25' },
    { id: 4, type: 'exchange', from: 'USDT', to: 'BTC', amount: 1000, date: '2023-04-20' },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'exchange':
        return <FaExchangeAlt className="text-blue-500" />
      case 'deposit':
        return <FaArrowDown className="text-green-500" />
      case 'withdraw':
        return <FaArrowUp className="text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Details</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className={`${darkMode ? 'bg-gray-800' : 'bg-white'} divide-y divide-gray-200 dark:divide-gray-700`}>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getIcon(transaction.type)}
                  <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </span>
                </div>
              </td>
              <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {transaction.type === 'exchange'
                  ? `${transaction.from} to ${transaction.to}`
                  : transaction.currency}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {transaction.amount} {transaction.type === 'exchange' ? transaction.from : transaction.currency}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {transaction.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory