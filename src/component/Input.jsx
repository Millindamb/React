import React,{useId} from 'react';
import './Input.css';

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption=[],
  selectCurrency="usd",
  className = "",
}) {
  const amountInpputId=useId()
  return (
    <div className={`input-box ${className}`}>
      <div className="input-left">
        <label htmlFor={amountInpputId} className="input-label">
          {label}
        </label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="input-field"
        />
      </div>

      <div className="input-right">
        <p className="currency-text">Currency Type</p>
        <select className="currency-select" value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
          {currencyOption.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
