import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './reducers/contactReducer'; 

export const store = configureStore({
  reducer: {
    contacts: contactsSlice, 
  },
  
});

/*
store.subscribe(() => {
  saveState({
    contacts: store.getState().contacts,
  });
});
*/

