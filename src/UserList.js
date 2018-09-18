import React, { Component } from 'react';

class UserList extends Component {
 state = {
   displayGames: true,
 }
 toggleGames = () => {
   this.setState(prevState => ({
   	displayGames: !prevState.displayGames
   }));
 }
 render() {
     return (
      <div>
        <h2>Users</h2>
       <button onClick={this.toggleGames}>{this.state.displayGames ? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}</button>
        <ul>
        {this.props.users.map((user, index) => (
            <li key={index}>{`${user.user_name} played ${this.state.displayGames ? user.numOfGames : '*'} games`}</li>
        ))}
        </ul>
      </div>
    )
 }
}

export default UserList;