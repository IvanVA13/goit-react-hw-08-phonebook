import { createAction } from '@reduxjs/toolkit';

// add
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// del
export const delContactRequest = createAction('contacts/delContactRequest');
export const delContactSuccess = createAction('contacts/delContactSuccess');
export const delContactError = createAction('contacts/delContactError');

// fetch
export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

// filter
export const filterContact = createAction('contacts/filter-contact');
