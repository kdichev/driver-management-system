import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ListItem, List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';
import ProfileBackground from './img/profileBg.jpg'
import Profile from './img/profile.png'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Navigation from 'material-ui/svg-icons/maps/navigation';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import _ from 'lodash'
const routes = [
  {
    title: "Route #1",
    distance: "73km",
    duration: "41 min",
    body: "Copenhagen, Tasstrup, Roskilde",
    status: "active",
    dueDate: "12:00",
    url: "https://www.google.dk/maps/dir/55.7008429,12.4585833/Farum+St.,+Farum/@55.7541566,12.357056,12z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x465245a38412d0d7:0x95e086fe5506d3f!2m2!1d12.3734487!2d55.8121009?hl=en",
    preview: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d71848.00477511012!2d12.354552572069709!3d55.754156642141616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d55.700845799999996!2d12.4585768!4m5!1s0x465245a38412d0d7%3A0x95e086fe5506d3f!2sFarum+St.%2C+3520+Farum!3m2!1d55.8121009!2d12.373448699999999!5e0!3m2!1sen!2sdk!4v1492103155309"
  },
  {
    title: "Route #2",
    distance: "351 km",
    duration: "1.5 h",
    body: "Copenhagen, Odense, Copenhagen",
    status: "active",
    dueDate: "17:00",
    url: "https://www.google.dk/maps/dir/55.7008429,12.4585833/Farum+St.,+Farum/@55.7541566,12.357056,12z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x465245a38412d0d7:0x95e086fe5506d3f!2m2!1d12.3734487!2d55.8121009?hl=en",
    preview: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d71848.00477511012!2d12.354552572069709!3d55.754156642141616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d55.700845799999996!2d12.4585768!4m5!1s0x465245a38412d0d7%3A0x95e086fe5506d3f!2sFarum+St.%2C+3520+Farum!3m2!1d55.8121009!2d12.373448699999999!5e0!3m2!1sen!2sdk!4v1492103155309"
  },
  {
    title: "Route #3",
    distance: "551km",
    duration: "3.5 h",
    body: "Copenhagen, Roskilde, Aalborg",
    status: "active",
    dueDate: "21:00",
    url: "https://www.google.dk/maps/dir/55.7008429,12.4585833/Farum+St.,+Farum/@55.7541566,12.357056,12z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x465245a38412d0d7:0x95e086fe5506d3f!2m2!1d12.3734487!2d55.8121009?hl=en",
    preview: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d71848.00477511012!2d12.354552572069709!3d55.754156642141616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d55.700845799999996!2d12.4585768!4m5!1s0x465245a38412d0d7%3A0x95e086fe5506d3f!2sFarum+St.%2C+3520+Farum!3m2!1d55.8121009!2d12.373448699999999!5e0!3m2!1sen!2sdk!4v1492103155309"
  }
]
class Admin extends Component {
  constructor(props) {
  super(props);
    this.state = {
      isSuperUser: localStorage.getItem("isSuperUser"),
      routes: [],
      start: '',
      end: '',
      dialogOpen: false
    };
  }

  componentWillMount() {
    this.isAuth();
  }

  isAuth = () => {
    console.log(this.state.isAuthenticated);
    if (this.state.isSuperUser) {
      // "do Stuff"
    } else {
      console.log(this.props);
      this.pushRoute(this.props, "/login")
    }
  }

  pushRoute = (props, route) => {
    return props.history.push(route);
  }

  handleStartChange = (event) => {
     this.setState({
       start: event.target.value,
     });
   };
   handleEndChange = (event) => {
      this.setState({
        end: event.target.value,
      });
    };

  onClick = () => {
    this.state.routes.push({
      start: this.state.state,
      end: this.state.end
    })
    this.setState(routes);
    this.setState({
      start: '',
      end: '',
      dialogOpen: false
    });
  }

  addRoutes = () => {
    this.setState({
      dialogOpen: true
    })
  }

  componentWillUnmount() {
    localStorage.setItem("data", this.state.routes);
  }

  render() {
    console.log(this.state.routes);
    return (
      <MuiThemeProvider>
        <div className="">
          <AppBar
            title={"Admin " + moment().format("DD/MM/YYYY")}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{backgroundColor: "#2196F3"}}
            onLeftIconButtonTouchTap={() => this.setState({open:true}) }
          />
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <div style={{padding: 15, backgroundImage: "url(" + ProfileBackground + ")"}}>
              <div style={{borderRadius: "50%", backgroundImage: "url(" + Profile + ")", height: 100, width:100, marginBottom: 10, backgroundSize: "100px 100px"}}></div>
              <div style={{color: "white"}}>John Doe</div>
              <div style={{color: "white"}}>johndoe@gmail.com</div>
            </div>
            <MenuItem onTouchTap={this.handleClose}>Dashboard</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Schedule</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>History</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Settings</MenuItem>
            <MenuItem onTouchTap={() => {localStorage.clear(); this.props.history.goBack()}}>Logout</MenuItem>
          </Drawer>
          {_.isEmpty(this.state.routes)  &&
            <div className="flexbox-container-admin">
              <h2>Add new routes</h2>
              <TextField
                value={this.state.start}
                onChange={this.handleStartChange}
                hintText="eg. John Doe"
                floatingLabelText="Floating Label Text"
              /><br />
              <TextField
                value={this.state.end}
                onChange={this.handleEndChange}
                floatingLabelText="Password"
              /><br />
              <RaisedButton label="Save" backgroundColor="#2196F3" labelColor="#ffffff" onClick={this.onClick}/>
            </div>
          }
          {!_.isEmpty(this.state.routes) &&
            this.state.routes.map(() =>
              <Card>
                <CardHeader
                  title="Without Avatar"
                  subtitle="Subtitle"
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
                <CardText expandable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
              </Card>
            )
          }
          {!_.isEmpty(this.state.routes) &&
          <FloatingActionButton style={{position: "absolute", bottom: 25, right: 25}} onClick={this.addRoutes}>
            <ContentAdd />
          </FloatingActionButton>
          }
          <Dialog
            title="Dialog With Actions"
            modal={false}
            open={this.state.dialogOpen}
            onRequestClose={this.handleClose}
          >
              <h2>Add new routes</h2>
              <TextField
                value={this.state.start}
                onChange={this.handleStartChange}
                hintText="eg. John Doe"
                floatingLabelText="Floating Label Text"
              /><br />
              <TextField
                value={this.state.end}
                onChange={this.handleEndChange}
                floatingLabelText="Password"
              /><br />
              <RaisedButton label="Save" backgroundColor="#2196F3" labelColor="#ffffff" onClick={this.onClick}/>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Admin;
