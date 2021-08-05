

const TodoListItem = (props) => {

    let onDeleteTask = () => {
        props.deleteTask(props.todoId, props.taskId)
    }
    return (
        <div>
            <input type='checkbox'></input>
            <span>{props.task}</span>
            <span>
                <button>Edit</button>
                <button onClick={onDeleteTask}>Delete</button>
            </span>

        </div>
    )
}

export default TodoListItem;