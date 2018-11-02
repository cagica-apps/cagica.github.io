require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';


class WorkComponent extends React.Component {
  render() {
    return (
 	   <div className="index bg-gray">
          	<div className="profile split">
            	<div className="left">
				</div>
				<div className="right">
				</div>
			</div>
		</div>
    );
  }
}

WorkComponent.defaultProps = {
};

export default WorkComponent;
