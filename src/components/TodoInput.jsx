import React, {Component} from 'react'
import PropTypes from 'prop-types'



class TodoInput extends Component {
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
    handleChange (type,event) {
        event.preventDefault()
        switch(type){
            case 'TITLE':
            this.setState({taskTitle:event.target.value})
            break;
            case 'DESC':
            this.setState({taskDescrp:event.target.value})
            break;
            default:
            return
        }
    }
    handleSubmit (event) {
        event.preventDefault()
        if(this.props.onSubmit){
        const { title, desc } = this.state;
        // let title = this.state.taskTitle
        // let desc = this.state.taskDescrp
        this.props.onSubmit(title,desc,event)
        }

    }
    render(){
        return(
            <div className="todoinput">
            <h2>Add a new task:</h2>
            <form onSubmit={evt => this.handleSubmit(evt)}>
                <label>
                    Task:<br/><input type='text' name='title'
                        value={this.state.taskTitle}
                        onChange={this.handleChange.bind(this,'TITLE')} /><br/>
                </label>
                <label>
                    Description:<br/><textarea name='description'
                        value={this.state.taskDescrp}
                        onChange={this.handleChange.bind(this,'DESC')}/><br/>
                </label>
                <input type='submit' value='Add'/>
            </form>
            </div>
        )
    }
}

export default TodoInput
