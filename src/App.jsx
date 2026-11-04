import { Component } from "react";
import "./App.css";
import data from "./users.json";
import UserList from "./components/UserList";

class App extends Component {
  state = {
    users: data,
  };

  componentDidMount() {
    // console.log('викикався компонент дід маунт');
  }

  componentDidUpdate(_, prevState) {
    console.log("стейт після оновлення>>>", this.state.users.length);

    console.log("попередній стейт>>>", prevState.users.length);
if (prevState.users.length !== this.state.length){
  window.localStorage.setItem('cards', JSON.stringify(this.state.users))
}
    // console.log( 'викликався компонент дід апдейт');
  }

  handleDelete = (userID) => {
    this.setState((prev) => ({
      users: prev.users.filter((user) => user.id !== userID),
    }));
  };

  render() {
    const { users } = this.state;

    return <UserList users={users} onDelete={this.handleDelete} />;
  }
}
export default App;
