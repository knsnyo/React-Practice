import React, {Component} from 'react';

class R024 extends Component{
	constructor(props){
		super(props);
		this.state={
			state_string: this.props.react_string,
			state_number: 200
		}
	}

	render(){
		return(
			<div style={{padding: '0px'}}>
				{this.state.state_string}{this.state.state_number}
			</div>
		)
	}
}

export default R024;