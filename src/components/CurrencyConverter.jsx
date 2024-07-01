import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsd, setEur } from '../store';
import '../styles/CurrencyConverter.css';

const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const { usd, eur } = useSelector((state) => state.currency);

  const handleUsdChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      dispatch(setUsd(value));
    }
  };

  const handleEurChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      dispatch(setEur(value));
    }
  };

  return (
    <div className="container">
      <div className="field">
        <label htmlFor="usd">USD</label>
        <input
          type="text"
          id="usd"
          value={usd}
          onChange={handleUsdChange}
        />
      </div>
      <div className="field">
        <label htmlFor="eur">EUR</label>
        <input
          type="text"
          id="eur"
          value={eur}
          onChange={handleEurChange}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;