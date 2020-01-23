import React, { Component } from 'react';
import './app.scss';

import SearchBox from './components/search-box/SearchBox';
import Cards from './components/cards/Cards';

class App extends Component {
  constructor() {
    super();

    this.state = {
      profiles: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ profiles: users }));
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { profiles, searchField } = this.state;
    const filteredUsers = profiles.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='app'>
        <h1>Search Profiles</h1>
        <SearchBox
          placeholder={'search users'}
          handleChange={this.handleChange}
        />
        <Cards profiles={filteredUsers} />
      </div>
    );
  }
}

export default App;
