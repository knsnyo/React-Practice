import React, { useContext } from 'react';
import { R079Context } from '../App';

export default () => {
  const {state, dispatch} = useContext(R079Context);

  return(
    <input 
      value="ADD 200"
      type="button"
      onClick={()=>{dispatch({type: 'ADD', value: state.str + '200'})}}
    />
  )
}