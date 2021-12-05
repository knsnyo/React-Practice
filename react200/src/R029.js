import React,{Component} from 'react';
import {shallowEqualArrays} from 'shallow-equal';

class R029 extends Component{
	constructor(props){
		super(props);
		this.state={state_string: 'REACT'}
	}

	shouldComponentUpdate(next_props, next_state){
		return !shallowEqualArrays(this.state, next_state);
	}

	componentDidMount(){
		const object={react: '200'};
		const arr1=['react', object];
		const arr2=['react', object];
		const arr3=['react', {react: '200'}];

		console.log(`shallowEqualArrays(arr1, arr2): ${shallowEqualArrays(arr1, arr2)}`);
		console.log(`shallowEqualArrays(arr2, arr3): ${shallowEqualArrays(arr2, arr3)}`);
		this.setState({state_string: 'react'});
	}

	render(){
		console.log(`render()`);
		return(
			<div>R029</div>
		)
	}
}

export default R029;