import {createStore, combineReducers, applyMiddleware} from 'redux'
import listsReducers from './reducers/lists-reduser'
import ThunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    lists: listsReducers
})

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;