import React from 'react';
import {
  BrowserRouter as Router, Switch, Link, Route,
} from 'react-router-dom';
import PageBooks from './books/PageBooks';
import Categories from './categories/Categories';
import './Nav.css';
import './categories/Categories.css';

export default function Nav() {
  return (
    <Router>
      <header>
        <nav>
          <div className="nav-bar">
            <h1 className="nav-title">Bookstore CMS</h1>
            <ul>
              <li>
                <Link to="/" className="nav-books">
                  BOOKS
                </Link>
              </li>
              <li>
                <Link to="/categories" className="nav-categories">
                  CATEROGRIES
                </Link>
              </li>
            </ul>
          </div>
          <div className="user-icon-wrapper">
            <i className="fas fa-user-alt" />
          </div>
        </nav>
      </header>
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
