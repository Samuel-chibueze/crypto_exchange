import React, { useState } from 'react'
import { FaArrowUp, FaArrowDown, FaWallet } from 'react-icons/fa'

interface darkmode {
  darkMode: boolean
  type: string
}

const DepositWithdrawForm = ({ type, darkMode }: darkmode) => {
  const [currency, setCurrency] = useState('BTC') // Crypto or Fiat selection
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const [bankAccount, setBankAccount] = useState('')
  const [bankName, setBankName] = useState('')
  const [selectedBank, setSelectedBank] = useState('')

  // List of available banks for fiat withdrawals
  const availableBanks = [
    'First Bank',
    'GTBank',
    'Access Bank',
    'UBA',
    'Zenith Bank',
  ]

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(type)
    let message
    if (currency === 'Fiat') {
      message = `${type === 'deposit' ? 'Deposit' : 'Withdrawal'} of ${amount} NGN to ${bankAccount} (${bankName}) processed.`
    } else {
      message = `${type === 'deposit' ? 'Deposit' : 'Withdrawal'} of ${amount} ${currency} ${type === 'deposit' ? 'to' : 'from'} address ${address} processed.`
    }
    setModalContent(message)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setAmount('')
    setAddress('')
    setBankAccount('')
    setBankName('')
    setSelectedBank('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
              } border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          {type==='withdraw' && <option value="Fiat">Fiat (NGN)</option> }{/* New Fiat Option */}
          </select>
        </div>

        <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
            className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
              } border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
          />
        </div>

        {currency === 'Fiat' ? (
          <>
            {/* Fiat-specific fields */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Bank Account Number</label>
              <input
                type="text"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                placeholder="Enter your bank account number"
                required
                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                  } border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Bank Name</label>
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Enter your bank name"
                required
                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                  } border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Select Bank</label>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                  } border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
                required
              >
                <option value="">Select a bank</option>
                {availableBanks.map((bank) => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Please ensure your bank details are correct before proceeding.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Cryptocurrency-specific field */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {type === 'deposit' ? 'Deposit' : 'Withdrawal'} Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={`Enter ${type === 'deposit' ? 'deposit' : 'withdrawal'} address`}
                required
                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                  } border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md`}
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          {type === 'deposit' ? <FaArrowDown className="mr-2" /> : <FaArrowUp className="mr-2" />}
          {type === 'deposit' ? 'Deposit' : 'Withdraw'}
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className={`relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <FaWallet className="h-6 w-6 text-green-600" />
              </div>
              <h3 className={`text-lg leading-6 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Transaction Processed</h3>
              <div className="mt-2 px-7 py-3">
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  {modalContent}
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
                  onClick={closeModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DepositWithdrawForm
