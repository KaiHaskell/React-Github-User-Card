import React from "react";
import axios from "axios";
import UserCard from "./components/userCard";
import "./App.css";

class App extends React.Component {
  state = {
    //user is for setting my personal profile card, followers is the array of followers I have
    user: {},
    followers: []
  };

  fetchUsers = () => {
    axios
      .get("https://api.github.com/users/KaiHaskell")
      .then(res => {
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="cards">
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
