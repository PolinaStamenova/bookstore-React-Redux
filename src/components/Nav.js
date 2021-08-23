/* eslint-disable quotes, object-curly-newline */

import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PageBooks from "./books/PageBooks";
import Categories from "./categories/Categories";

export default function Nav() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <PageBooks />
          </Route>
        </Switch>
      </nav>
    </Router>
  );
}
