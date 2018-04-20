import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoInput from '../components/TodoInput'
import { addTask } from '../reducers/tasksReducer'
import { connect } from 'react-redux'



class TodoInputCotainer extends Component {
    static propTypes = {
        taskTitle: PropTypes.string,
        taskDescrp: PropTypes.string,
        onSubmit: PropTypes.func,
        onChange: PropTypes.func
      }

    constructor (props) {
        super (props) 
        this.state={
            taskTitle:'',
            taskDescrp:''
        }
    }

    handleSubmit (title,desc,event) {            
        if(this.props.onSubmit){ 
        let newTask = {taskTitle:title, taskDescrp:desc} 
        this.props.onSubmit(newTask)
        }        
    }

    render(){
        return(
            <TodoInput 
                onSubmit={this.handleSubmit.bind(this)}
                onChange={this.handleChange}
            />
            
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSubmit: (newTask) => 
        dispatch(addTask(newTask))
    }
}

export default connect (null,
    mapDispatchToProps
)(TodoInputCotainer)
