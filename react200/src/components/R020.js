import React,{Component} from 'react';
import dataType from 'prop-types';

class R020 extends Component{
	render(){
		let{
			ObjectJson
		}=this.props;
		return(
			<div style={{padding:'0px'}}>
				{JSON.stringify(ObjectJson)}
			</div>
		)
	}
}

R020.propTypes={
	ObjectJson: dataType.shape({
		react: dataType.string,
		two: dataType.number,
	})
}

export default R020;