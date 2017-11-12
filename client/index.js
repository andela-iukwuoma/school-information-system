import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import './css/style.css';
import App from './components/App';
import Students from './components/Students';
import StudentDetail from './components/StudentDetail';
import StudentForm from "./components/StudentForm";

ReactDOM.render(
    <AppContainer>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Students} />
                <Route path="/student/add" component={StudentForm} />
                <Route path="/student/:id" component={StudentDetail} />
            </Route>
        </Router>
    </AppContainer>,
    document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(<App />);
    });
}