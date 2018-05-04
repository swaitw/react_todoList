import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


class TodoApp extends Component {


    _saveTasks (name,tasks) {

        localStorage.setItem(name,JSON.stringify(tasks)) // Why is this a container? did you map props there?

    }
    render(){
        return(
            <div>
                <TodoList/>
                <TodoInput />
            </div>
        )
    }
}

export default TodoApp