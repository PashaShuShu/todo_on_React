const ADD_NEW_TODO = "ADD-NEW-TODO";
const ADD_NEW_TASK = "ADD-NEW-TASK";
const DELETE_TODO = "DELETE-TODO";
const DELETE_TASK = "DELETE-TASK";

let initialState = {
    todos: [
        {
            id: 0,
            name: "first List",
            tasks: [
                { id: 0, taskText: "1first task", done: false },
                { id: 2, taskText: "first task", done: true },
                { id: 3, taskText: "first task", done: false },
            ]
        }, {
            id: 2,
            name: "second List",
            tasks: [
                { id: 0, taskText: "2first task", done: true },
                { id: 2, taskText: "first task", done: false },
                { id: 3, taskText: "first task", done: false },
            ]
        }, {
            id: 3,
            name: "third List",
            tasks: [
                { id: 0, taskText: "3first task", done: true },
                { id: 2, taskText: "first task", done: false },
                { id: 3, taskText: "first task", done: true },
            ]
        },
    ]
}

let getRandomId = () => (Math.round(100000 * Math.random()))

const listReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO: return {
            ...state,
            todos: [
                ...state.todos,
                { id: getRandomId(), name: action.name, tasks: [] },
            ]
        }
        case ADD_NEW_TASK: return {
            ...state,
            todos: state.todos.map(todo => {
                debugger
                if (action.todoId === todo.id) {
                    return {
                        ...todo,
                        tasks: [
                            ...todo.tasks,
                            { id: getRandomId(), taskText: action.taskText, done: false },
                        ]
                    }
                }
                return todo
            })
        }
        case DELETE_TODO: return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.todoId)
        }
        case DELETE_TASK: return {
            ...state,
            todos: state.todos.map(todo => {
                if(todo.id===action.todoId){
                    return {
                        ...todo,
                        tasks: todo.tasks.filter(task => task.id !== action.taskId)
                    }
                }
                return todo;
            })
        }
        default:
            return state;
    }
}

export const addNewTodo = (name) => ({ type: ADD_NEW_TODO, name });
export const addNewTask = (todoId, taskText) => ({ type: ADD_NEW_TASK, todoId, taskText });
export const deleteTodo = (todoId) => ({ type: DELETE_TODO, todoId });
export const deleteTask = (todoId, taskId) => ({ type: DELETE_TASK, todoId, taskId });

export default listReduser;