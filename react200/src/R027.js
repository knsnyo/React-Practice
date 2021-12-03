import React,{Component} from 'react';

class R027 extends Component{
	constructor(props){
		super(props);
		this.state={
			state_string: 'react',
			state_arr_obj: ['react', {react: '200'}]
		}
	}

	buttonClick=type=>{
		if('String'===type){
			this.setState({state_string: 'react'});
		}else{
			this.setState({state_arr_obj: ['react', {react: '200'}]});
		}
	}

	render(){
		console.log('render()');
		return(
			<div>
				<button onClick={e=>this.buttonClick('String')}>
					문자열 변경
				</button>
				<button onClick={e=>this.buttonClick('ArrayObject')}>
					객체 변경
				</button>
			</div>
		)
	}
}

export default R027;