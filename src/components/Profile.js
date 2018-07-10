require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

class ProfileComponent extends React.Component {
   state = {
    file: 'images/cv.pdf',
    numPages: null,
    page: 1
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  
  render() {
    const { file, numPages, page } = this.state;
    return (
      <div className="index">
          <div className="profile split">
            <div className="left">
              <div className="wrapper">
                <h1>Hello,</h1>
                <h2>my name is Sergio Cagica</h2>
                <p>Lisbon</p>
              </div>
            </div>
          <div className="right light">
            <Document file={file}
                onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={page}/>
            </Document>
          </div>
        </div>
      </div>
    );
  }
}

ProfileComponent.defaultProps = {
};

export default ProfileComponent;
