import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alterReducer from './alterReducer';
import { v4 as uuidV4 } from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from '../types.js';

const AlterState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(alterReducer, initialState);

  //set alter
  const setAlter = (msg, type, timeout = 5000) => {
    const id = uuidV4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, timeout);
  };
  return (
    <AlertContext.Provider
      value={{
        alters: state,
        setAlter,
      }}
    >
      {props.children};
    </AlertContext.Provider>
  );
};

export default AlterState;
