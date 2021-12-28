import React, { useReducer } from 'react'
import R079 from './components/R079'

export const R079Context = React.createContext();
const initialState = {
  str: 'REACT',
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <R079Context.Provider value={{state, dispatch}}>    
      <h1>Start REACT 200</h1>
      <span>{state.str}</span><br/>
      <R079/>
    </R079Context.Provider>
  )
}

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD':
      return {
        ...state,
        str: action.value,
      };
    default:
      return {initialState};
  }
}