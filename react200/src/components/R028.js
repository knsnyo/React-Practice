import React,{PureComponent} from 'react';

class R028 extends PureComponent{
	constructor(props){
		super(props);
		this.state={
			state_string: 'react',
			state_arr_obj: ['react', {react: '200'}]
		}
	}

	buttonClick=(type)=>{
		if('String'===type){
			// 똑같으니까 render() 실행 안 됨
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
				<button onClick={e=>this.buttonClick('else')}>
					객체 배열 변경
				</button>
			</div>
		)
	}
}

export default R028;