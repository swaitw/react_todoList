import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OnGoingList from '../components/onGoingList'
import FinishedList from '../components/finishedList'
import { initTasks, deleteTask, updateTask } from'../reducers/tasksReducer'


class TodoListCotainer extends Component {

    static propTypes = {
        taskTitle: PropTypes.string,
        taskDescrp: PropTypes.string,
        onSubmit: PropTypes.func,
        onChange: PropTypes.func,
        onGoingtasks:PropTypes.array,
        InitTasks:PropTypes.func,
        IniState:PropTypes.array
      }

    state = {
        onGoingtasks:[],
        finishedTasks:[]
    }

    constructor(props){
        super(props)
        // this.state={
        //     onGoingtasks:[],
        //     finishedTasks:[]
        // }
    }
     componentDidMount () {
        this._iniState()

    }
    _iniState(){
        let InitState=this._loadData()

        this.props.initTasks(InitState)
    }
    _saveTasks (name,tasks) {

        localStorage.setItem(name,JSON.stringify(tasks))

    }

    _loadData(){
        let onGoingtasks = localStorage.getItem('onGoingtasks')
            onGoingtasks = JSON.parse(onGoingtasks)
        let finishedTasks = localStorage.getItem('finishedTasks')
            finishedTasks = JSON.parse(finishedTasks)
        let initState = {onGoingtasks:onGoingtasks,finishedTasks:finishedTasks}
            return initState
    }
    handleChecked (index,event) {
        event.preventDefault()
        let onGoingtasks = [...this.props.onGoingtasks]
        let finishedTasks = [...this.props.finishedTasks]
        let task = onGoingtasks.splice(index,1)
        finishedTasks.push(task[0])


        this._saveTasks('onGoingtasks',onGoingtasks)
        this._saveTasks('finishedTasks',finishedTasks)

        if(this.props.handleChecked) // This won't work
        this.props.handleChecked(index,event)
    }

    handleCancel (index,event) {

        let onGoingtasks = [...this.props.onGoingtasks]
        onGoingtasks.splice(index,1)
        this._saveTasks('onGoingtasks',onGoingtasks)

        if(this.props.handleCancel)
        this.props.handleCancel(index,event)

    }

    render(){
        return(
            <div>
                    <OnGoingList
                            onGoingtasks={this.props.onGoingtasks}
                            finishedTasks={this.props.finishedTasks}
                            handleCancel={this.handleCancel.bind(this)}
                            handleChecked={this.handleChecked.bind(this)}/>
                    <FinishedList
                            onGoingtasks={this.props.onGoingtasks}
                            finishedTasks={this.props.finishedTasks}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        finishedTasks: state.finishedTasks,
       onGoingtasks: state.onGoingtasks

    }
  }

const mapDispachToProps = (dispach) =>{
    return{
     handleCancel: (Index)=>
        dispach(deleteTask(Index)),
     handleChecked: (Index)=>
        dispach(updateTask(Index)),
     initTasks: (IniState)=>
        dispach(initTasks(IniState))
    }
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(TodoListCotainer)