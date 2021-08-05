import classes from '../list.module.css'
import { useState } from 'react';

const TodoListItem = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [taskText, setTaskText] = useState(props.taskText);

    let onEditModeOn = () => {
        setEditMode(true);
    }
    let onEditModeOff = () => {
        props.changeTaskText(props.todoId, props.taskId)
        setEditMode(false);
    }

    let onTaskTextChanged = (e) => {
        setTaskText(e.target.value);
    }

    let onDeleteTask = () => {
        props.deleteTask(props.todoId, props.taskId)
    }

    let onDone = () => {
        props.changeDone(props.todoId, props.taskId)
    }

    return (
        <div className={classes.tasks}>
            <div>
                <input onClick={onDone} className={classes.checkbox} type='checkbox' checked={props.done}></input>
                <span className={classes.task_text, props.done ? classes.task_done : null} >
                    {editMode ?
                        <input type='text' onChange={onTaskTextChanged} value={taskText} />
                        :
                        <span>{taskText}</span>
                    }
                </span>
            </div>
            <div className={classes.task_buttons}>
                <button className="btn btn-primary" onClick={editMode ? onEditModeOff : onEditModeOn} type='submit'>Edit</button>
                <button className="btn btn-outline-danger" onClick={onDeleteTask}>Delete</button>
            </div>

        </div>
    )
}

export default TodoListItem;