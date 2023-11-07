import { createSelector } from "@reduxjs/toolkit";

// export const selectItems = state => state.contacts.contacts.item;
// export const selectItemsIsloading = state => state.contacts.contacts.isLoading;
// export const selectItemsError = state => state.contacts.contacts.error;
// export const selectItemsFilter = state => state.contacts.filter;


// Selector to contacts


const selectPhonebook = state => state.phonebook;

export const selectContacts = createSelector(selectPhonebook, phonebook => phonebook.contacts);

export const selectContactsIsLoading = createSelector(selectPhonebook, phonebook => phonebook.isLoading);

export const selectContactsError = createSelector(selectPhonebook, phonebook => phonebook.error)

export const selectContactsFilterTerm = createSelector(selectPhonebook, phonebook => phonebook.filterTerm)

