import { configureStore, createSlice } from '@reduxjs/toolkit';

const exchangeRate = 1.07;

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    usd: '',
    eur: '',
  },
  reducers: {
    setUsd: (state, action) => {
      const usd = action.payload;
      state.usd = usd;
      state.eur = usd ? (parseFloat(usd) / exchangeRate).toFixed(2) : '';
    },
    setEur: (state, action) => {
      const eur = action.payload;
      state.eur = eur;
      state.usd = eur ? (parseFloat(eur) * exchangeRate).toFixed(2) : '';
    },
  },
});

export const { setUsd, setEur } = currencySlice.actions;

const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
  },
});

export default store;