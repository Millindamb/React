import react, { useState } from 'react'
import useCurrencyInfo from './hooks/uceCurrencyInfo'
import './App.css'
import background from './component/background.jpeg';
import Input from './component/Input'

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setconvertedAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>{
    setconvertedAmount(amount*currencyInfo[to])
  }
  return (
    <div
      className="app-container"
      style={{
                backgroundImage: `url(${background})`,
            }}
    >
      <div className="app-wrapper">
        <div className="app-card">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="form-section">
              <Input 
              label="From" 
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount)=>{
                setAmount(amount)
              }}
              />
            </div>

            <div className="swap-container">
              <button
                type="button"
                className="swap-button"
                onClick={()=>swap()}
              >
                swap
              </button>
            </div>

            <div className="form-section bottom">
              <Input 
              label="to" 
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectCurrency={to}
              />
            </div>

            <button type="submit" className="convert-button">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

