import React, {Component} from 'react'
import PropTypes from 'prop-types'

class OnGoingList extends Component {

    static defualProps={
        onGoingtasks:[],
        finishedTasks:[]

    }

    static propTypes={
        onGoingtasks:PropTypes.array,
        handleCancel:PropTypes.func,
        handleChecked:PropTypes.func
    }


    handleCancel (index,event) {
        if(this.props.handleCancel)
        this.props.handleCancel(index,event)
    }

    handleChecked (index,event) {
        if(this.props.handleChecked)
        this.props.handleChecked(index,event)
    }

    render(){
        const onGoingtasks=this.props.onGoingtasks
        return(
            <div>                   
                    <div className="total">
                    <h2>Todo Tasks:</h2> {onGoingtasks.length} {(onGoingtasks.length>1)? 'tasks':'task'} need to do.
                        
                    </div>
                    <div className="ongoing">
                    {(onGoingtasks.length>0)?
                    (<ul>
                        {onGoingtasks.map((task,i) =>
                        <li key={i} index={i}>     
                            <span>
                            {(i+1)}•
                            <input onClick={this.handleChecked.bind(this,i)} type="checkbox" index={i} />{task.taskTitle} 
                            <button className="deletebtn" onClick={this.handleCancel.bind(this,i)}>Delete this task</button></span>
                            <p>{task.taskDescrp}</p>
    
                        </li>)}
                    </ul>
                    ):(<p> Good Job, You have done all your tasks.</p>)}
                    </div>                                 
            </div>
        )
    }
}

export default OnGoingList
