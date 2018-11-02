require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

class ProfileComponent extends React.Component {
   state = {
    file: 'images/cv.pdf',
    pages: null,
    page: 1
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ pages: numPages });
  }
  
   handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }
  
  renderPagination = (page, pages) => {
    let previousButton = <div className="previous"><FontAwesomeIcon icon={faChevronLeft} color="#000" size="2x" onClick={this.handlePrevious}/></div>;
    if (page === 1) {
      previousButton = <div className="previous disabled"><FontAwesomeIcon icon={faChevronLeft} color="#000" size="2x" onClick={this.handlePrevious}/></div>;
    }
	  
    let nextButton = <div className="next"><FontAwesomeIcon className="next" icon={faChevronRight} color="#000" size="2x" onClick={this.handleNext}/></div>;
    if (page === pages) {
      nextButton = <div className="next disabled"><FontAwesomeIcon className="next disabled" icon={faChevronRight} color="#000" size="2x" onClick={this.handleNext}/></div>;
    }
	  
	console.log(previousButton, nextButton);
	  
    return (
      <nav>
        <div className="pager">
          	{previousButton}
          	{nextButton}
        </div>
      </nav>
      );
  }
  
  render() {
    const { file, pages, page } = this.state;

	let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
	  
    return (
      <div className="index">
          <div className="profile split">
            <div className="left">
              	<div className="wrapper">
					<img src="https://media.licdn.com/dms/image/C5603AQHOYsNrt6l6Fg/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=LxqxpUYWyMxpqO2JODuXLGMhVHZo9SW5Qt_eTB2t1sE" className="headshot"/>
					<h1>Sérgio Cagica</h1>
					<p>Lisboa, Portugal</p>
					<p>I'm a software engineer at TekEver currently working on Santander banking apps. I work mainly with Android Applications, but I have some experience in iOS too.</p>
					<p>On a daily basis I work with SOAP and REST services, MVP and MVC architectures, deploying and managing Google Play Apps and API access, and also securing our applications.</p> 
					<p>I've been working as a software consultant for over 3 years now, playing around with Cordova, Ionic 1 and 2, Angular 1 and 2, RxJava, Unity, VR and web development stuff. In those years I've done some innovation projects for Novabase involving VR in mobile, Finzzy a ground breaking Personal Financial Manager, and others.</p>
					<p>For now, I love learning new stuff about Android Development. Like to attend conferences about new technologies.</p> 
				</div>
          </div>
          <div className="right light">
          <div className="centered-container">
             <Document className="pdf" file={file}
                onLoadSuccess={this.onDocumentLoadSuccess}>
                <Page pageNumber={page}/>
             </Document>
			{pagination}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileComponent.defaultProps = {
};

export default ProfileComponent;
