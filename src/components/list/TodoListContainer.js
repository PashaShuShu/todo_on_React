import { useSelector } from 'react-redux';
import TodoList from './TodoList'
import { getLists } from '../../redux/selectors/selector'


const TodoListContainer = (props) => {
    let lists = useSelector(getLists);
    let list = lists.map((item => { 
        return <TodoList
            key={item.id}
            id={item.id}
            name={item.name}
            tasks={item.tasks} />
    }));
    return <>{list}</>
}


export default TodoListContainer;
