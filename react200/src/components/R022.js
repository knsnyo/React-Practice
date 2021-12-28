import React,{Component} from 'react';

class R022 extends Component{
	render(){
		let{
			ReactString,
			ReactNumber
		}=this.props;
		return(
			<div style={{padding:'0px'}}>
				{ReactString}{ReactNumber}
			</div>
		)
	}
}

R022.defaultProps={
	ReactString: "react",
	ReactNumber: 400
}

export default R022;