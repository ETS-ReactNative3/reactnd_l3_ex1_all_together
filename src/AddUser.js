import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    user: {
      first_name: "",
      last_name: "",
      user_name: "" 
    },
    duplicateError: "",
  }

  //update the state of the controlled component
  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
		user: {...prevState.user, [name]: value}
    }));
  }

  isDisabled = event => {
    const { first_name, last_name, user_name } = this.state.user;
  	return (first_name === '' || last_name === '' || user_name === '')
  }

  handleSubmit = event => {
    event.preventDefault();
    let errorText = '';
    
    if(!this.checkDuplicate(this.state.user.user_name)){
     this.props.addUser(this.state.user);
    }else{
      errorText  = `${this.state.user.user_name} already exists. Please choose a new username`;
    }
    
     this.setState({
      duplicateError: errorText
     });
  }	

  checkDuplicate = name => {
    for (let user of this.props.users){
      if (user.user_name === name)	return true;
    }
  	return false;
  }

  render(){
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input 
            name="first_name"
            placeholder = "first name"
    		onChange = {this.handleChange}
			value = {this.state.user.first_name}
        />
        <input 
            name="last_name" 
            placeholder = "last name"
			onChange = {this.handleChange}
			value = {this.state.user.last_name}
        />
        <input 
            name="user_name"
            placeholder = "user name"
        	onChange = {this.handleChange}
			value = {this.state.user.user_name}
		/>
        <button disabled={this.isDisabled()}>Add User</button>
      </form>
	  {`${this.state.duplicateError}`}
	</div>	
	)
  }
}

export default AddUser;