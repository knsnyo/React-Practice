// state는 직접 변경이 안 된다.
import React, {Component} from 'react';

class R025 extends Component{
	constructor(props){
		super(props);
		this.state={
			state_string: 'react'
		}
	}

	stateChange=(flag)=>{
		if('direct'===flag) this.state.state_string = '리액트';
		if('setState'===flag) this.setState({state_string: '리액트'});
	}

	render(){
		return(
			<div style={{padding: '0px'}}>
				<button onClick={(e)=>this.stateChange('direct', e)}>
					state 직접 변경 [{this.state.state_string}]
				</button>
				<button onClick={(e)=>this.stateChange('setState', e)}>
					setState로 변경 [{this.state.state_string}]
				</button>
			</div>
		)
	}
}

export default R025;