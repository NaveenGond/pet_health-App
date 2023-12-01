// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PetList from './components/PetList';
import VaccinationRecords from './components/VaccinationRecords';
import Appointments from './components/Appointments';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={PetList} />
          <Route path="/vaccination" component={VaccinationRecords} />
          <Route path="/appointments" component={Appointments} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
