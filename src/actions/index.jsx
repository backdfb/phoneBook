import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT, CLEAR_SEARCH, SET_CURRENT_CONTACT } from './types';

// 연락처 추갸
export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

// 연락처 삭제
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

// 연락처 수정
export const editContact = (contact) => ({
  type: EDIT_CONTACT,
  payload: contact,
});

// 연락처 검색
export const searchContact = (query) => ({
  type: SEARCH_CONTACT,
  payload: query,
});

// 검색 초기화
export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

// 현재 연락처 세부 정보
export const setCurrentContact = (text) => ({
  type: SET_CURRENT_CONTACT,
  payload: text,
});
