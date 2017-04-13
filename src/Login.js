import React, { Component } from 'react';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'

const style = {
  margin: 12,
};

const users = [
  {
    username: "kdichev",
    password: "asd",
    superUser: true
  },
  {
    username: "sasheF",
    password: "asd"
  }
]

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
     userNamevalue: '',
     passwordValue: ''
    };
  }

  onClick = () => {
    console.log(users);
    console.log(this.state);
    users.find((item) => {
      if (item.username === this.state.userNamevalue && item.password === this.state.passwordValue) {
        if (item.superUser) {
          console.log(item.username);
          localStorage.setItem("isSuperUser", true);
          this.pushRoute(this.props, "/admin");
        } else {
          this.pushRoute(this.props, "/dashboard");
          localStorage.setItem("isAuth", true);
        }
      } else {
        // err
      }
    })
  }

   pushRoute = (props, route) => {
     return props.history.push(route);
   }

   handleUserNameChange = (event) => {
      this.setState({
        userNamevalue: event.target.value,
      });
    };

    handlePasswordChange = (event) => {
       this.setState({
         passwordValue: event.target.value,
       });
     };

  render() {
    return (
      <MuiThemeProvider>
        <div className="flexbox-container-login">
              <Paper style={{padding: 20}}>
                <h2>Login</h2>
              <TextField
                value={this.state.userNamevalue}
                onChange={this.handleUserNameChange}
                hintText="eg. John Doe"
                floatingLabelText="Floating Label Text"
              /><br />
              <TextField
                value={this.state.passwordValue}
                onChange={this.handlePasswordChange}
                floatingLabelText="Password"
              /><br />
              <RaisedButton label="Login" backgroundColor="#2196F3" labelColor="#ffffff" style={style} onClick={this.onClick}/>
            </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
