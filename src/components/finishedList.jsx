import React, {Component} from 'react'
import PropTypes from 'prop-types'

class FinishedList extends Component {
    static defualProps={
        finishedTasks:[],
        onGoingtasks:[]

    }

    static propTypes={
        onGoingtasks:PropTypes.array,
        finishedTasks:PropTypes.array,
        handleCancel:PropTypes.func,
        handleChecked:PropTypes.func
    }

    render () {
        const finishedTasks=this.props.finishedTasks
        const onGoingtasks=this.props.onGoingtasks
        return(
                <div>
                <h2 >Finished Tasks:</h2>                   
                   {finishedTasks.length} of {(onGoingtasks.length+finishedTasks.length)} {(finishedTasks.length>1)? 'tasks have':'task has'} been done. 
                    <div className="finishedtasks" ><ul>
                        {finishedTasks.map((task,i) =>
                        <li key={i}><input type="checkbox" index={i} checked="true" readOnly/>{task.taskTitle}</li>)}
                    </ul>
                    </div> 
                </div> 
        )
    }

}

export default FinishedList