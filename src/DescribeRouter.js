import React from 'react';

export default function DescribeRouter(){
  return(

    <ol>
    <li>
    <h1>Start with Code from ReactRouter.com</h1>
    <p>I simply cut and pasted the following code from <a href="https://reactrouter.com/web/guides/quick-start">https://reactrouter.com/web/guides/quick-start</a> in my own Router.js</p>
      <pre>{`
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//...

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

      //...
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
        `}
      </pre>
      </li>
      <li>
        <h1>Export router as MyRouter and use in index.js in place of {`<App />`}</h1>
        <pre>{`
          ReactDOM.render(
            <React.StrictMode>
              <MyRouter />
            </React.StrictMode>,
            document.getElementById('root')
          );
          `}
        </pre>
      </li>
    </ol>
  );
}
