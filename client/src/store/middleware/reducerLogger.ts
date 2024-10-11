import { Middleware, isAction } from '@reduxjs/toolkit';

/**
 * notes:
 * 
 * isAction is self-explanatory. Action is otherwise set to type "unknown",
 * which makes typing action.type a pain.
 */
const reducerLogger: Middleware = store => next => action => {
  if (isAction(action)) {
    console.group(action.type);
    console.info('dispatching:', action);
  
    let result = next(action);
  
    console.log('updated state', store.getState());
    console.groupEnd();
    return result;
  }
};

export default reducerLogger;