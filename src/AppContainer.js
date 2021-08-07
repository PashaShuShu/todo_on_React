import { Provider } from "react-redux";
import store from './redux/redux-store';
import App from './App';

let AppContainer = () => {
    return(
        <Provider store={store}>
          <App />
        </Provider>
    )
}

export default AppContainer;