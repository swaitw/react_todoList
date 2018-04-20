// action types
const INIT_TASKS = 'INIT_TASKS'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const UPDATE_TASK = 'UPDATE_TASK'

// reducer
export default function (state, action) {
  if (!state) {
    state = { onGoingtasks: [
      {   taskTitle:'吃饭',
          taskDescrp:'',
          finished:false},
      { taskTitle:'睡觉',
          taskDescrp:false},
      ],
    finishedTasks:[
      { taskTitle:'刷牙',
          taskDescrp:false}

  ] }
  }

  switch (action.type) {
    case INIT_TASKS:

      let onGoingtasks=state.onGoingtasks
      let finishedTasks=state.finishedTasks
      if(action.InitState.onGoingtasks)
        onGoingtasks=action.InitState.onGoingtasks
      if(action.InitState.finishedTasks)
        finishedTasks=action.InitState.finishedTasks
      return { onGoingtasks: onGoingtasks,
        finishedTasks:finishedTasks
      }
    case ADD_TASK:
      return {
        onGoingtasks: [...state.onGoingtasks, action.newTask],
        finishedTasks:state.finishedTasks
      }
    case DELETE_TASK:
      return {
        onGoingtasks: [
          ...state.onGoingtasks.slice(0, action.Index),
          ...state.onGoingtasks.slice(action.Index + 1)
        ],
        finishedTasks:state.finishedTasks
      }
    case UPDATE_TASK:
    
      let task=[...state.onGoingtasks.splice(action.Index,1)]
          task = task[0]

         finishedTasks=[...state.finishedTasks]
          finishedTasks.push(task)
      
      return {
        onGoingtasks:[
          ...state.onGoingtasks
        ],
        finishedTasks:finishedTasks
        

      }
    default:
      return state
  }
}

export const initTasks = (InitState) => {
  return { type: INIT_TASKS, InitState }
}

export const addTask = (newTask) => {
  return { type: ADD_TASK, newTask }
}

export const deleteTask = (Index) => {
  return { type: DELETE_TASK, Index }
}

export const updateTask = (Index) => {
  return { type: UPDATE_TASK, Index }
}
