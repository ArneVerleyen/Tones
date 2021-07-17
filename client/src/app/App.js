import React from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

// scss import.
import './_sass/index.scss';

// Pages import
import {
    HomePage,
    TrainingPage,
    IntervalsPage,
    LoginPage,
    RegisterPage,
    IntervalSettingsPage,
    EndSessionPage,
    SynchroneIntervalSettingsPage,
    IntervalsSynchronicPage,

} from './pages';

import * as Routes from './routes';
import {RouteWithLayout} from './utilities';
import {PageLayOut} from './layout';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Redirect exact path = {Routes.LANDING} to = {Routes.HOME} />
                <RouteWithLayout exact path = {Routes.HOME} component = {HomePage} layout = {PageLayOut} />

                <RouteWithLayout exact path = {Routes.TRAINING} component = {TrainingPage} layout = {PageLayOut} />
                
                <RouteWithLayout exact path = {Routes.INTERVALS} component = {IntervalsPage} layout = {PageLayOut} />
                <RouteWithLayout exact path = {Routes.INTERVAL_SETTINGS} component = {IntervalSettingsPage} layout = {PageLayOut} />

                <RouteWithLayout exact path = {Routes.INTERVALS_END_SESSION} component = {EndSessionPage} layout = {PageLayOut} />

                <RouteWithLayout exact path = {Routes.INTERVALS_SYNCHRONIC} component = {IntervalsSynchronicPage} layout = {PageLayOut} />
                <RouteWithLayout exact path = {Routes.INTERVALS_SYNCHRONIC_SETTINGS} component = {SynchroneIntervalSettingsPage} layout = {PageLayOut} />

                <RouteWithLayout exact path = {Routes.AUTH_SIGN_IN} component = {LoginPage} layout = {PageLayOut} />
                <RouteWithLayout exact path = {Routes.AUTH_SIGN_UP} component = {RegisterPage} layout = {PageLayOut} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
