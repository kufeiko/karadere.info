import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import SearchBox from '../SearchBox';
import logo from './karadere_logo.png';

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <nav className="navbar is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Да спасим Кара дере">
            <img typeof="foaf:Image" src={logo} alt="Лого на сайта" />
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target="navMenu"
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          id="navMenu"
        >
          <div className="navbar-end">
            <nav>
              <Link className="navbar-item" to="/about">
                За нас
              </Link>
              <Link className="navbar-item" to="/articles">
                Актуално
              </Link>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link
                      className="button is-primary is-outlined"
                      to="/contact"
                    >
                      Контакти
                    </Link>
                  </p>
                </div>
              </div>
            </nav>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
          </div>
        </div>
      </nav>
    )}
  />
);

export default NavBar;
