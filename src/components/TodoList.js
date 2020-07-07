// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className='shopping-list'>
            {props.allTasks.map(task => (
                <Todo onComplete={props.onComplete} task={task}/>
            ))}
            <button onClick={props.onClear}>Clear Completed Tasks</button>
        </div>
    )

}

export default TodoList