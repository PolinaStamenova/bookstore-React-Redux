/* eslint-disable quotes, object-curly-newline */

import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PageBooks from "./books/PageBooks";
import Categories from "./categories/Categories";
import "./Nav.css";

export default function Nav() {
  return (
    <Router>
      <nav>
        <div className="nav-bar">
          <h1>Bookstore CMS</h1>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <p>image</p>
      </nav>
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <PageBooks />
        </Route>
      </Switch>
    </Router>
  );
}
