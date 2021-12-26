import {ADD} from '../actions';
import { combineReducers } from 'redux';

const initState = {
	str: 'react',
};

const data = (state = initState, aciton) => {
	switch(aciton.type){
		case ADD:
			return state, {
				str: state.str + '200'
			};
			default:
				return state;
	}
};

const App = combineReducers({
	data
});

export default App;