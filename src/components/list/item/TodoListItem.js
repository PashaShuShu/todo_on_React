
import { useState } from 'react';

const TodoListItem = (props) => {

    let[ editMode, setEditMode] = useState(false);
    let[taskText, setTaskText] = useState(props.taskText);

    let onEditModeOn= () =>{
        setEditMode(true);
    }
    let onEditModeOff= () =>{
        props.changeTaskText(props.todoId, props.taskId)
        setEditMode(false);
    }

    let onTaskTextChanged= (e) => {
        setTaskText(e.target.value);
    }

    let onDeleteTask = () => {
        props.deleteTask(props.todoId, props.taskId)
    }

    return (
        <div>
            <input type='checkbox'></input>
            {editMode?
            <input type='text' onChange={onTaskTextChanged} value={taskText} />
            :
            <span>{taskText}</span>
            }
            
            <span>
                <button  onClick={editMode ? onEditModeOff : onEditModeOn}  type='submit'>Edit</button>
                <button onClick={onDeleteTask}>Delete</button>
            </span>

        </div>
    )
}

export default TodoListItem;