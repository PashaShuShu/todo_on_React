import Item from './item/TodoListItem'
import { useState } from 'react'
import classes from './list.module.css'
import { useDispatch } from 'react-redux'
import { addNewTask, deleteTodo } from './../../redux/reducers/lists-reduser';

const TodoList = (props) => {

    const dispatch = useDispatch();

    let [addTask, setAddTask] = useState(false);
    let [newTaskText, setNewTaskText] = useState("");
   

    let tasks = props.tasks;
    if (tasks.length > 0) {
        tasks = props.tasks.map(task => {
            return <Item
                key={task.id}
                todoId={props.id}
                taskId={task.id}
                taskText={task.taskText}
                done={task.done}
            />
        })
    }

    let onSetAddTaskOn = () => {
        setAddTask(true);
    }
    let onSetAddTaskOff = () => {
        dispatch(addNewTask(props.id, newTaskText));
        setNewTaskText("");
        setAddTask(false);
    }

    let onChangeNewTaskText = (e) => {
        setNewTaskText(e.target.value);
    }

    let onDeleteTodo = () => {
        dispatch(deleteTodo(props.id));
    }

    return (
        <div className={"p-4 p-md-5 mb-4 text-white rounded bg-dark"}>
            <div>
                <h2>
                    <span className={classes.todo_name}>{props.name}</span>
                    {addTask ?
                        <div>
                            <input type="text" onChange={onChangeNewTaskText} value={newTaskText} />
                            <button className="btn btn-success" onClick={onSetAddTaskOff}>add</button>
                        </div>
                        :
                        <button className="btn btn-success" onClick={onSetAddTaskOn}>Add new task</button>
                    }

                    <button className="btn btn-outline-danger" onClick={onDeleteTodo}>Delete</button>
                </h2>

            </div >
            <div>
                {tasks}
            </div>
        </div >
    )
}

export default TodoList;