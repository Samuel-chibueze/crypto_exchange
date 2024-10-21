import React, { useState, useEffect } from 'react';
import { FaExchangeAlt, FaWallet, FaArrowUp, FaArrowDown, FaHistory, FaMoon, FaSun, FaBitcoin, FaEthereum, FaDollarSign } from 'react-icons/fa';
import ExchangeForm from './components/ExchangeForm';
import DepositWithdrawForm from './components/DepositWithdrawForm';
import TransactionHistory from './components/TransactionHistory';

function App() {
  const [activeTab, setActiveTab] = useState<string>('exchange');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState<boolean>(false); // For controlling wallet modal visibility

  // Mock prices for the crypto assets in USD
  const cryptoPricesInUSD = {
    BTC: 40000,  // 1 BTC = $40,000
    ETH: 2500,   // 1 ETH = $2,500
    USDT: 1,     // 1 USDT = $1
  };

  // Simulated USD to NGN exchange rate
  const usdToNgnRate = 780;  // 1 USD = 780 NGN

  // Simulating account details (these would typically come from an API)
  const [accountDetails, setAccountDetails] = useState({
    name: 'John Doe',
    balance: 5000.0,
    wallets: [
      { currency: 'Bitcoin', symbol: 'BTC', amount: 0.8, logo: <FaBitcoin className="text-yellow-400" /> },
      { currency: 'Ethereum', symbol: 'ETH', amount: 2.5, logo: <FaEthereum className="text-blue-500" /> },
      { currency: 'Tether', symbol: 'USDT', amount: 1500, logo: <FaDollarSign className="text-green-500" /> },
    ],
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleWalletModal = () => {
    setIsWalletModalOpen(!isWalletModalOpen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} flex flex-col transition-colors duration-200`}>
      {/* Header */}
      <header className="bg-blue-600 dark:bg-blue-800 text-white py-4 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">wepay bot</h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors duration-200"
        >
          {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-300" />}
        </button>
      </header>

      {/* Account Details */}
      <section className="container mx-auto px-4 py-4">
        <div className={`flex justify-between items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg p-4`}>
          <div>
            <h2 className="text-xl font-semibold">Account Details</h2>
            <p className="text-lg">Name: {accountDetails.name}</p>
            <p className="text-lg">Balance: ${accountDetails.balance.toFixed(2)}</p>
          </div>
          <div>
            <button
              onClick={toggleWalletModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              <FaWallet className="inline-block mr-2" /> View Wallet
            </button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-3`}>
          <div className="flex justify-center mb-6 bg-gray-200 dark:bg-gray-700 rounded-lg p-1 w-full">
            {['exchange', 'deposit', 'withdraw', 'history'].map((tab) => (
              <button
                key={tab}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors duration-200`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'exchange' && <FaExchangeAlt className="mr-2" />}
                {tab === 'deposit' && <FaArrowDown className="mr-2" />}
                {tab === 'withdraw' && <FaArrowUp className="mr-2" />}
                {tab === 'history' && <FaHistory className="mr-2" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          {activeTab === 'exchange' && <ExchangeForm darkMode={darkMode} />}
          {activeTab === 'deposit' && <DepositWithdrawForm type="deposit" darkMode={darkMode} />}
          {activeTab === 'withdraw' && <DepositWithdrawForm type="withdraw" darkMode={darkMode} />}
          {activeTab === 'history' && <TransactionHistory darkMode={darkMode} />}
        </div>
      </main>

      {/* Wallet Modal */}
      {isWalletModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 max-w-full`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold dark:text-white">Your Crypto Wallets</h2>
              <button onClick={toggleWalletModal} className="text-red-500 text-xl">&times;</button>
            </div>
            <ul className="space-y-4">
              {accountDetails.wallets.map((wallet) => {
                const usdValue = wallet.amount * (cryptoPricesInUSD[wallet.symbol as keyof typeof cryptoPricesInUSD] || 0);
                const ngnValue = usdValue * usdToNgnRate;
                return (
                  <li key={wallet.symbol} className="flex justify-between items-center p-2 rounded-lg shadow bg-gray-100 dark:bg-gray-700">
                    <div className="flex items-center">
                      <div className="mr-3 text-3xl">{wallet.logo}</div>
                      <div>
                        <p className="text-lg font-semibold">{wallet.currency}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{wallet.symbol}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{wallet.amount}</p>
                      <p className="text-sm">~ ${usdValue.toFixed(2)} USD</p>
                      <p className="text-sm">~ ₦{ngnValue.toFixed(2)} NGN</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                onClick={toggleWalletModal}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} py-4`}>
        <p className="text-center text-gray-600 dark:text-gray-400">© 2023 Crypto Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
