import React, { Component } from 'react';
import { 
  Router, 
  Route, 
  Switch, 
} from 'react-router-dom';
import { 
  initialState, 
  reducer, 
  StateProvider,
} from './utils/State';
import AppBar from './components/appBar/AppBar';
import Footer from './components/footer/Footer';

import Home from './containers/home/Home';
import Find from './containers/find/Find';
import Projects from './containers/projects/Projects';
import Plans from './containers/plans/Plans';
import Login from './containers/login/Login';
import Register from './containers/register/Register';
import JoinAsManufacturer from './containers/joinAsManufacturer/JoinAsManufacturer';
import ResetPass from './containers/resetPass/ResetPass';
import UpdatePass from './containers/resetPass/UpdatePass';
import MyAccount from './containers/myAccount/MyAccount';
import CompanyPage from './containers/company/CompanyPage';
import SeeOffers from './containers/offers/SeeOffers';
import CreateProject from './containers/projects/CreateProject';

import history from './utils/History';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      appName: "Manufacturer App",
    }
  }

  render() {
    const {appName} = this.state;

    return (
      <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="App" style={{backgroundColor: "#fafafa"}}>
          <div className="App" style={{minHeight: "595px"}}>
            <Router history={history}>
              <AppBar appName={appName}/>
              <div style={{marginTop: "60px", paddingTop: "20px"}}>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/find" component={Find} exact/>
                    <Route path="/projects" component={Projects} exact/>
                    <Route path="/plans" component={Plans} exact/>
                    <Route path="/joinAsManufacturer" component={JoinAsManufacturer} exact/>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/register" component={Register} exact/>
                    <Route path="/reset-pass" component={ResetPass} exact/>
                    <Route path="/updatePass/:token" component={UpdatePass} exact/>
                    <Route path="/myAccount" component={MyAccount} exact/>
                    <Route path="/company/:id" component={CompanyPage} exact/>
                    <Route path="/seeOffers/:projectId" component={SeeOffers} exact/>
                    <Route path="/create-project" component={CreateProject} exact/>

                    {/* /create-project */}
                </Switch>
              </div>
            </Router>
          </div>
          <Footer company={appName}/>
        </div>

      </StateProvider>
      </>
    );
  }
}

export default App;
