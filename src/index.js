import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import GlobalStyles from './components/GlobalStyles';
import rootReducer from './store/reducers/rootReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const reactStore = createStore(rootReducer);
root.render(
    // <React.StrictMode>
    <GlobalStyles>
        <Provider store={reactStore}>
            <App />
        </Provider>
    </GlobalStyles>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
