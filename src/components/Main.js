require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faPaperPlane, faBriefcase, faCameraRetro, faFileAlt} from '@fortawesome/free-solid-svg-icons';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ul className="dock">
          <li>
            <FontAwesomeIcon icon={faHome} color="#ddd" size="2x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} color="#ddd" size="2x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faFileAlt} color="#ddd" size="2x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} color="#ddd" size="2x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faCameraRetro} color="#ddd" size="2x"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faPaperPlane} color="#ddd" size="2x"/>
          </li>
        </ul>
        <div className="title">
          <h1>Hello,</h1>
          <h2>my name is Sergio Cagica</h2>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
