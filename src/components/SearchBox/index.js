import React, { Component } from 'react';
import { Link } from 'gatsby';
// Search component
export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
      isActive: false,
    };
  }

  render() {
    return (
      <div className={`navbar-item ${this.state.isActive ? 'is-active' : ''}`}>
        <input
          className="input navbar-link is-rounded is-primary"
          type="text"
          value={this.state.query}
          onChange={this.search}
          placeholder="Търсене"
        />
        <div className="navbar-dropdown">
          {this.state.results.map((page, i) => (
            <Link className="navbar-item" key={i} to={page.slug}>
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  getSearchResults(query) {
    if (!query || !window.__LUNR__) return [];
    const lunrIndex = window.__LUNR__['ru']; // TODO: here the language should be bg once there is BG lang
    const results = lunrIndex.index.search(query); // you can  customize your search , see https://lunrjs.com/guides/searching.html
    return results.map(({ ref }) => lunrIndex.store[ref]);
  }

  search = event => {
    const query = event.target.value;
    const results = this.getSearchResults(query);
    const isActive = !!query;
    this.setState(s => {
      return {
        results,
        query,
        isActive,
      };
    });
  };
}
