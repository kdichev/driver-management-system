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
class Dashboard extends Component {
  constructor(props) {
  super(props);
    this.state = {
      isAuthenticated: localStorage.getItem("isAuth"),
      open: false
    };
  }

  componentWillMount() {
    this.isAuth();
  }

  isAuth = () => {
    console.log(this.state.isAuthenticated);
    if (this.state.isAuthenticated) {
      // "do Stuff"
    } else {
      console.log(this.props);
      this.pushRoute(this.props, "/login")
    }
  }

  pushRoute = (props, route) => {
    return props.history.push(route);
  }

  onClick = (item) => {
    console.log(item);
    //window.location.href = link
    //opens native app
    //window.location = 'geo:40.765819,-73.975866'
    // opens in browser maps
    var url = item.url;
    window.open(url, '_blank', 'location=yes');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="">
          <AppBar
            title={"Dashboard " + moment().format("DD/MM/YYYY")}
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
          {/* <Subheader style={{backgroundColor:"#F5F5F5"}}>Nested List Items</Subheader>
          <Divider /> */}
          <List style={{padding: 0}}>
          <Subheader style={{backgroundColor:"#F5F5F5"}}>Current routes</Subheader>
          <Divider />
          {routes.map((item)=>
            <div>
              <Card>
                <CardHeader className="header"
                  title={
                      <div style={{height: "20px"}}>
                        <div style={{float: "left"}}>{item.title}</div>
                        <div style={{float: "right", color: "#5a9d00"}}>{item.duration}</div>
                      </div>
                  }
                  subtitle={
                    <div style={{height: "20px"}}>
                      <div>
                        <div style={{float: "left"}}>{item.body}</div>
                        <div style={{float: "right"}}>Arrive Arround {item.dueDate}</div>
                        <br />
                        <div style={{float: "right"}}>{item.distance}</div>
                      </div>
                    </div>
                  }
                  style={{width: "100%"}}
                  actAsExpander={true}
                />
                <CardActions actAsExpander={true}>
                  <FlatButton label="details" labelStyle={{color: "#2196F3", padding: 0}} style={{minWidth: 72}}/>
                </CardActions>
                <CardText expandable={true}>
                    <iframe src={item.preview}
                      width="100%"
                      height="250"
                      frameBorder="0"
                      style={{border:0}}
                      allowFullScreen
                    />
                    <ListItem primaryText={
                        <div>
                          <ArrowUpward />
                          Turn left to stay on Slotsherrens Vænge
                        </div>
                      }
                    />
                    <ListItem primaryText={
                        <div>
                          <ArrowBack />
                          Turn left to stay on Slotsherrens Vænge
                        </div>
                      }
                    />
                    <ListItem primaryText={
                        <div>
                          <ArrowForward />
                          Turn left to stay on Slotsherrens Vænge
                        </div>
                      }
                    />
                    {/* <RaisedButton label="Start" backgroundColor="#2196F3" labelColor="#ffffff" /> */}
                    <div style={{textAlign: "right"}}>
                      <FloatingActionButton onClick={() => this.onClick(item)} backgroundColor="#2196F3" labelColor="#ffffff">
                       <Navigation />
                     </FloatingActionButton>
                   </div>
                </CardText>
              </Card>
              {/* <ListItem
                key={item.title}
                primaryText={
                    <div style={{height: "25px"}}>
                      <div style={{float: "left"}}>{item.title}</div>
                      <div style={{float: "right", color: "#5a9d00"}}>{item.duration}</div>
                    </div>
                }
                secondaryText={
                  <div style={{height: "55px"}}>
                    <div>
                      <div style={{float: "left"}}>{item.body}</div>
                      <div style={{float: "right"}}>{item.distance}</div>
                    </div>
                    <br />
                    <br />
                    <a style={{color: "#2196F3"}}>DETAILS</a>
                  </div>
                }
                onClick={() => this.onClick(item)}
              />
              <Divider /> */}
            </div>
          )}
          </List>
          <Divider />
          <List>
          <Subheader style={{backgroundColor:"#F5F5F5"}}>Upcoming routes</Subheader>
          <Divider />
          {[1,2,3,4].map((item)=>
            <ListItem
              key={item}
              primaryText={"Route #" + item + " 5"+ item + "km"}
              secondaryText="Roskilde, Tasstrup, Kobehnavn"
              onClick={() => this.onClick(item)}
            />
          )}
          </List>
          <List>
          <Subheader style={{backgroundColor:"#F5F5F5"}}>Previous routes</Subheader>
          <Divider />
          {[1,2,3,4].map((item)=>
            <ListItem
              key={item}
              primaryText={"Route #" + item + " 5"+ item + "km"}
              secondaryText="Roskilde, Tasstrup, Kobehnavn"
              onClick={() => this.onClick(item)}
            />
          )}
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;
