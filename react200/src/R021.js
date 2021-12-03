import React,{Component} from 'react';
import datatype from 'prop-types';

class R021 extends Component{
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

R021.propTypes={
	ReactString: datatype.isRequired,
}

export default R021;