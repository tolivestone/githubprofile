import React, { Component } from 'react';
import User from './components/profile/User'
import './App.css';
import Loading from './components/Loading'
import Header from './components/header/Header'
import GitDataService from './service/gitdataservice'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      loading: false
    }

  }

  getUser = () => {
    const gitDataService = new GitDataService();
    this.setState({
      loading: true
    })
    const name = this.refs.name.value;
    setTimeout(() => {
      gitDataService.getGitUser(name, data => {
        this.setState({
          user: data,
          loading: false,
          found: data != null
        });
      })
    }, 1000)

  }
  render() {
    const { found, user } = this.state

    let userProfile;
    if (this.state.loading === true) {
      userProfile = <div className='loading-user-card'><Loading /></div>
    } else if (found && user) {
      userProfile = <User user={this.state.user} />
    } else if (found != null && !found) {
      userProfile = <div className='loading-user-card'><h3>User not found</h3></div>
    }
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <div id='search-bar'>
            <input type="text" placeholder='Enter UserName' ref="name" />
            <button className='searchButton' onClick={this.getUser}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        {userProfile}
      </div>
    );
  }
}

export default App;
