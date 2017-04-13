import React, { Component } from 'react';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';

const style = {
  margin: 12,
};

class App extends Component {
  constructor(props) {
  super(props);
    this.state = { /* initial state */ };
  }

  onClick = () => {
    //this.props.history.push("/dashboard")
    if (localStorage.getItem("isAuth")) {
      this.pushRoute(this.props, "/dashboard")
    } else if (localStorage.getItem("isSuperUser")) {
      this.pushRoute(this.props, "/admin")
    } else {
      this.pushRoute(this.props, "/login")
    }
  }

   pushRoute = (props, route) => {
     return props.history.push(route);
   }

  render() {
    return (
      <MuiThemeProvider>
        <div className="flexbox-container">
            <h2>Driver App</h2>
            <p>To get started, click on <code>LOGIN</code> and begin your journey.</p>
            <RaisedButton label="Login" backgroundColor="#FF7043" labelColor="#ffffff" style={style} onClick={this.onClick}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
