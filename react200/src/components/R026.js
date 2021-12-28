// 직접 바꾸고 싶으면 forceUpdate() 하자
import React,{Component} from 'react';

class R026 extends Component{
	constructor(props){
		super(props);
		this.state={
			state_string: 'react'
		}
	}

	stateChange=()=>{
		this.state.state_string='REACT';
		this.forceUpdate();
	}

	render(){
		return(
			<div style={{padding: '0px'}}>
				<button onClick={e=>this.stateChange('direct', e)}>
					state 직접변경 [{this.state.state_string}]
				</button>
			</div>
		)
	}
}

export default R026;