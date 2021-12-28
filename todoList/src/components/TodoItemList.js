import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
    render(){
        // todos = 객체가 들어있는 배열
        // onToggle = 체크박스 on/off
        // onRemove = 삭제
        const{todos, onToggle, onRemove} = this.props;
        const todoList=todos.map(
            ({id, text, checked})=>(
                <TodoItem
                  id={id}
                  text={text}
                  checked={checked}
                  onToggle={onToggle}
                  onRemove={onRemove}
                  key={id}
                />
            )
        );

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;