import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/task1" component={Task1} />
        <Route path="/task2" component={Task2} />
        <Route path="/task3" component={Task3} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
