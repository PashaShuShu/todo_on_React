import { connect } from 'react-redux';
import TodoList from './TodoList'
import { getLists } from '../../redux/selectors/selector'
import { addNewTask, deleteTodo, deleteTask } from './../../redux/reducers/lists-reduser';

const TodoListContainer = (props) => {

    let list = props.lists.map((item => {
        return <TodoList
            deleteTask={props.deleteTask}
            deleteTodo={props.deleteTodo}
            addNewTask={props.addNewTask}
            key={item.id}
            id={item.id}
            name={item.name}
            tasks={item.tasks} />
    }));

    return <>{list}</>

}


let mapStateToProps = (store) => {
    return {
        lists: getLists(store),
    }
}

export default connect(mapStateToProps, {
    addNewTask,
    deleteTodo,
    deleteTask,
})(TodoListContainer);