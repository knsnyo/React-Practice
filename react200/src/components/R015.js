import React,{Component} from 'react';

class R015 extends Component{
    componentDidMount(){
        var map_arr=[3,2,8,8];
        let map_new_arr=map_arr.map(x=>x);
        console.log(`1. map_new_arr: ${map_new_arr}`);

        let map_multi_arr=map_arr.map(x=>x*2);
        console.log(`2. map_multi_arr: ${map_multi_arr}`);

        var obj_arr=[{key: 'react', value: '200'}, {key: '리액트', value: 'TwoHundred'}];
        let map_obj_arr=obj_arr.map((obj, index)=>{
            console.log(`${index+3}.obj: ${JSON.stringify(obj)}`);
            var var_obj={};
            var_obj[obj.key]=obj.value;
            return obj;
        });
        console.log(`5. map_obj_arr: ${JSON.stringify(map_obj_arr)}`);
    }

    render(){
        return(
            <h2>R015</h2>
        )
    }
}

export default R015;