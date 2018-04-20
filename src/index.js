import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './containers/TodoAPP'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import tasksReducer from './reducers/tasksReducer'

const store = createStore(tasksReducer)





ReactDOM.render(
    <Provider store ={store} >
        <TodoApp />
    </Provider>, 
    document.getElementById('root'))