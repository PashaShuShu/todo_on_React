import Item from './item/TodoListItem'
import { useState } from 'react'

const TodoList = (props) => {
    let [addTask, setAddTask] = useState(false);
    let [newTaskText, setNewTaskText] = useState("");

    let tasks = props.tasks;
    if (tasks.length > 0) {
        tasks = props.tasks.map(task => {
            return <Item
                changeTaskText={props.changeTaskText}
                key={task.id}
                todoId={props.id}
                taskId={task.id}
                taskText={task.taskText}
                deleteTask={props.deleteTask} />
        })
    }

    let onSetAddTaskOn = () => {
        setAddTask(true);
    }
    let onSetAddTaskOff = () => {
        props.addNewTask(props.id, newTaskText);
        setNewTaskText("");
        setAddTask(false);
    }

    let onChangeNewTaskText = (e) => {
        setNewTaskText(e.target.value);
    }

    let onDeleteTodo = () => {
        props.deleteTodo(props.id);
    }

    return (
        <div>
            <div>
                <h2>
                    {props.name}
                    {addTask ?
                        <div>
                            <input type="text" onChange={onChangeNewTaskText} value={newTaskText} />
                            <button onClick={onSetAddTaskOff}>add</button>
                        </div>
                        :
                        <button onClick={onSetAddTaskOn}>Add new task</button>
                    }

                    <button onClick={onDeleteTodo}>Delete</button>
                </h2>

            </div >
            <div>
                {tasks}
            </div>
        </div >
    )
}

export default TodoList;