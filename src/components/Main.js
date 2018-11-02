require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faPaperPlane, faBriefcase, faCameraRetro, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import { Route, Link } from 'react-router-dom';
import ProfileComponent from './Profile';
import WorkComponent from './Work';

const Home = () => (
  <div className="bg-full-image">
    <div className="title">
      <h1>Hello,</h1>
      <h2>my name is Sergio Cagica</h2>
    </div>
  </div>
);

const CV = () => (
  <div className="title">
    <h1>Hello,</h1>
    <h2>This is CV</h2>
  </div>
);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ul className="dock">
          <li>
            <Link to="/"><FontAwesomeIcon icon={faHome} color="#ddd" size="2x"/></Link>
          </li>
          <li>
            <Link to="/profile"><FontAwesomeIcon icon={faUser} color="#ddd" size="2x"/></Link>
          </li>
          <li>
            <Link to="/work"><FontAwesomeIcon icon={faBriefcase} color="#ddd" size="2x"/></Link>
          </li>
          <li>
            <Link to="/photos"><FontAwesomeIcon icon={faCameraRetro} color="#ddd" size="2x"/></Link>
          </li>
          <li>
            <Link to="/contacts"><FontAwesomeIcon icon={faPaperPlane} color="#ddd" size="2x"/></Link>
          </li>
        </ul>
        <Route path="/" exact component={Home}/>
        <Route path="/profile" component={ProfileComponent}/>
        <Route path="/work" component={WorkComponent}/>
        <Route path="/contacts" render={() => (<div> This is the airport route </div>)}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
