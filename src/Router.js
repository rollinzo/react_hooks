//basic outline imported from https://reactrouter.com/web/example/basic

import React, {useState, useContext} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DescribeRouter from "./DescribeRouter";
import { EffectHook1, EffectHook2, EffectHook3 } from "./EffectHook";
import { AppInfo } from "./AppInfo";
import ContextHook1 from "./ContextHook";
import ImpHandle from "./ImpHandle";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function MyRouter() {
  const [appName, setAppName ] = useContext(AppInfo);

  //const [appName, setAppName ] = useState("HooksApp");
  const subdomain = "react_hooks";
  return (
    <AppInfo.Provider value={[appName, setAppName]}>

    <Router basename="/react_hooks">
      <div>
      <h1>{appName}</h1>
        <ul>
          <li>
            <Link to="/">KDR's React Hooks Home</Link>
          </li>
          <li>
            <Link to="/router">Router</Link>
          </li>
          <li>
            <Link to="/useEffect1">useEffect() unconstrained</Link>
          </li>
          <li>
            <Link to="/useEffect2">useEffect() only fires for certain states</Link>
          </li>
          <li>
            <Link to="/useEffect3">Will useEffect() fire if the state is not used?</Link>
          </li>
          <li>
            <Link to="/changeAppName">useContext to change appName</Link>
          </li>
          <li>
            <Link to="/imperativeHandle">imperativeHandle</Link>

          </li>
          <li>
            <a href="https://github.com/rollinzo/react_hooks">This code on Github</a>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/router">
            <DescribeRouter />
          </Route>
          <Route path="/useEffect1">
            <EffectHook1 />
          </Route>
          <Route path="/useEffect2">
            <EffectHook2 />
          </Route>
          <Route path="/useEffect3">
            <EffectHook3 />
          </Route>
          <Route path="/changeAppName">
            <ContextHook1 />
          </Route>
          <Route path="/imperativeHandle">
            <ImpHandle />
          </Route>
        </Switch>
      </div>
    </Router>
    </AppInfo.Provider>
  );
}

function Home(){
  return(<div>Nothing here</div>);

}
