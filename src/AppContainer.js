import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/redux-store';
import App from './App';

let AppContainer = () => {
    return(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
}

export default AppContainer;