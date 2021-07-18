import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  delContactError,
  delContactRequest,
  delContactSuccess,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
  filterContact,
} from './contacts-actions';

const itemsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },

  [delContactSuccess]: (state, { payload }) => {
    const filteredContacts = state.filter(contact => contact.id !== payload);
    return filteredContacts;
  },
});

const loaderReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [delContactRequest]: () => true,
  [delContactSuccess]: () => false,
  [delContactError]: () => false,

  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loader: loaderReducer,
});
