import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faAt, faMobileAlt, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(faAt, faLinkedin, faStackOverflow, faGithub, faMobileAlt, faArrowDown, faChevronLeft, faChevronRight);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
