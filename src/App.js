import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Layout from './Layout/Layout';
import Params from './Params/Params';
import GetAll from './GetAll/GetAll';
import Id from './Id/Id';
import NewUser from './NewUser/NewUser';
import DeleteUser from './DeleteUser/DeleteUser';
import WithParamsId from './WithParams/WithParamsId'
import WithParam from './WithParams/WithParams'
import WithParamUserId from './WithParams/WithParamUserId'
import './App.css';

class App extends Component {


  render() {
    const routes = (
      <Switch>
        <Route path="/Layout" component={Layout} />
        <Route path="/getAll"  component={GetAll} />
        <Route path="/getByid"  component={Id} />
        <Route path="/getByparams"  component={Params} />
        <Route path="/newUser"  component={NewUser} />
        <Route path="/deleteUser"  component={DeleteUser} />
        <Route path="/IdParams/:id"  component={WithParamsId} />
        <Route path="/Params/:params"  component={WithParam} />
        <Route path="/UserIdParams/:userId"  component={WithParamUserId} />
        <Route path="/UserParams/:id"  component={WithParamUserId} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    );
  
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
