import React,{Component} from 'react';

class R012 extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        // ES5
        var exam_count_func=(function(){
            function examCount(num){
                this.number=num;
            }
            examCount.prototype.showNum = function(){
                console.log(`1. react_${this.number}`);
            }
            return examCount;
        }());

        var cnt=new exam_count_func('200');
        cnt.showNum();

        // ES6 함수를 객체에 담아서 사용
        class ExamCountClass{
            constructor(num2){
                this.number2=num2;
            }
            showNum(){
                console.log(`2. react_${this.number2}`);
            }
        }

        var cnt2=new ExamCountClass('2hundred');
        cnt2.showNum();
    }

    render(){
        return(
            <h2> R012 </h2>
        )
    }
}

export default R012;