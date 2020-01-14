import React from "react";
import axios from "axios";

import { UserCard } from "./components/UserCard";
import { FollowerCards } from "./components/FollowerCards";

import "./App.css";

class App extends React.Component {
  state = {
    user: {},
    followers: []
  };

  fetchUser = () => {
    axios
      .get("https://api.github.com/users/KaiHaskell")
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log("can't get user", err);
      });
    axios
      .get("https://api.github.com/users/KaiHaskell/followers")
      .then(res => {
        this.setState({ ...this.state, followers: res.data });
      })
      .catch(err => {
        console.log("Can't get followers", err);
      });
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        {this.state.followers.map(data => (
          <FollowerCards
            key={data.id}
            img={data.avatar_url}
            followers={data.login}
            bio={data.bio}
          />
        ))}
      </div>
    );
  }
}

export default App;
