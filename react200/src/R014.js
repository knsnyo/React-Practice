import React,{Component} from 'react';

class R014 extends Component{
    componentDidMount(){
        var for_arr=[3, 2, 8, 8];
        var for_new_arr=[];

        for(var i=0;i<for_arr.length;i+=1){
            for_new_arr.push(for_arr[i]);
        }
        console.log(`${for_new_arr}`);

        var for_each_arr=[3, 3, 9, 8];
        var for_each_new_arr=[];
        
        for_each_arr.forEach((result)=>{
            for_each_new_arr.push(result);
        })
        console.log(`${for_each_new_arr}`);
    }

    render(){
        return(
            <h2>R014</h2>
        )
    }
}

export default R014;