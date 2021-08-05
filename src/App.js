import TodoListContainer from './components/list/TodoListContainer';
import { connect } from 'react-redux';
import { addNewTodo } from './redux/reducers/lists-reduser';
import { useState } from 'react'
import classes from './App.module.css'

function App(props) {

  let [todoListName, setTodoListName] = useState("");

  let onAddNewTodoList = () => {
    if (todoListName) {
      props.addNewTodo(todoListName);
      setTodoListName('');
    }
    else alert("How about name for your new list")
  }

  let onChangeAddLost = (e) => {
    setTodoListName(e.target.value);
  }

  return (
    <div className={classes.App}>
      <div>
        <h1>TODO</h1>
        <input className={classes.list_name} placeholder="new list name" onChange={onChangeAddLost} type="text" value={todoListName} />
        <button className="btn btn-success" onClick={onAddNewTodoList}>NewList</button>
      </div>
      <div className={classes.todos}>
        <TodoListContainer />
      </div>
    </div>
  );
}

let mapStateToProps = (store) => {
  return {}
}

export default connect(mapStateToProps, {
  addNewTodo,
})(App);
