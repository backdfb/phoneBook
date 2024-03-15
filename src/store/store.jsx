import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slices/contactsSlice'; 
import { loadState, saveState } from '../utils/localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    contacts: contactsSlice, 
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    contacts: store.getState().contacts,
  });
});

export default store;
