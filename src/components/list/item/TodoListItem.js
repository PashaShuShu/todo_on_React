import classes from '../list.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeDone, deleteTask, changeTaskText } from '../../../redux/reducers/lists-reduser';

const TodoListItem = (props) => {
    const dispatch = useDispatch();

    let [editMode, setEditMode] = useState(false);
    let [taskText, setTaskText] = useState(props.taskText);

    let onEditModeOn = () => {
        setEditMode(true);
    }
    let onEditModeOff = () => {
        dispatch(changeTaskText(props.todoId, props.taskId));
        setEditMode(false);
    }

    let onTaskTextChanged = (e) => {
        setTaskText(e.target.value);
    }

    let onDeleteTask = () => {
        dispatch(deleteTask(props.todoId, props.taskId));
    }

    let onDone = () => {
        dispatch(changeDone(props.todoId, props.taskId));
    }

    return (
        <div className={classes.tasks}>
            <div>
                <input onClick={onDone} className={classes.checkbox} type='checkbox' defaultChecked={props.done}></input>
                <span className={(classes.task_text, props.done ? classes.task_done : null)} >
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