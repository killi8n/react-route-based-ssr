import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Introduction, Profile, Repositories } from '../pages';
import { Rendered } from '../lib/shouldCancel';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact={true} path="/" component={Introduction} />
          <Route path="/profile" component={Profile} />
          <Route path="/repos" component={Repositories} />
        </Switch>
        <Rendered />
      </>
    );
  }
}

export default App;
