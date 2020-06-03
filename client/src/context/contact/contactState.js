import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    current: null,
    filtered: null,
    contacts: [
      {
        id: 1,
        name: 'Jill Johson',
        email: 'jill@gmail.com',
        phone: '111-111',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Two Johson',
        email: 'two@gmail.com',
        phone: '222-222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Three Johson',
        email: 'three@gmail.com',
        phone: '333-333',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //添加联系人
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //删除联系人
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // 设置当前联系人
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //清理当前联系人
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //更新联系人
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // 过滤联系人
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //清除 过滤
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children};
    </ContactContext.Provider>
  );
};

export default ContactState;
