import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './Home';
import LoginPage from './Login';
import UserList from './Userlist';
import BlogList from './Bloglist';
import BlogDetails from './Blogdetails';
import '../App.css';
import '../bootstrap.css';
import PrivateRoute from './PrivateRoute';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Switch>
            <PrivateRoute exact path="/home" component={HomePage} />
            <PrivateRoute exact path="/users" component={UserList} />
            <PrivateRoute exact path="/blogs" component={BlogList} />
            <PrivateRoute exact path="/blogs/:id" component={BlogDetails} />
            <Route path="/login" component={LoginPage} />
            <Redirect from="*" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
