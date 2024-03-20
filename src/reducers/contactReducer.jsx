import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [], // 연락처 목록 지정
  searchedContacts: [] // 연락처 검색 결과
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState, //초기값
  reducers: {
    addContact: (state, action) => { //state: 초기값, action: 객체
      state.contacts.push(action.payload);
      console.log(state.contacts);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    searchContact: (state, action) => {
      const query = action.payload.toLowerCase();
      state.searchedContacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(query)
      );
    },
    clearSearch: (state) => {
      state.searchedContacts = [];
    },
    setCurrentContact: (state, action) => {
      // 현재 선택된 연락처를 설정하는 로직을 여기에 추가하세요.
      // 예시: state.currentContact = action.payload;
    }
  }
});

export const { addContact, deleteContact, editContact, searchContact, clearSearch, setCurrentContact } = contactsSlice.actions;

export default contactsSlice.reducer;
