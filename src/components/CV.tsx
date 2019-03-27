import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';

import cvBack from '../images/cv_back.png';
import cvFront from '../images/cv_front.png';

class CV extends React.Component {
  public state = {
    file: "SERGIO_CAGICA_CV_2019_02_01.pdf",
    page: cvFront,
    previousDisabled: true,
    nextDisabled: false
  };

  public onDocumentLoadSuccess = ({ numPages }: any) => {
    this.setState({ pages: numPages });
  };

  public handlePrevious = () => {
    this.setState({ nextDisabled: false });
    this.setState({ previousDisabled: true });
    this.setState({ page: cvFront });
  };

  public handleNext = () => {
    this.setState({ nextDisabled: true });
    this.setState({ previousDisabled: false });
    this.setState({ page: cvBack });
  };

  public render() {
    return (
      <div className="App-cv centered-container">
        <a href={this.state.file} download>
          <Fab
            variant="extended"
            aria-label="Download"
            className="btn-download"
          >
            <FontAwesomeIcon size="2x" icon="arrow-down" />
            <span>Download</span>
          </Fab>
        </a>
        <div className="pdf-wrapper">
          <IconButton
            disabled={this.state.previousDisabled}
            className="btn-previous"
            aria-label="Previous"
            onClick={this.handlePrevious}
          >
            <FontAwesomeIcon size="2x" icon="chevron-left" />
          </IconButton>
          <div className="pdf-viewer">
            <img src={this.state.page} />
          </div>
          <IconButton
            disabled={this.state.nextDisabled}
            className="btn-next"
            aria-label="Next"
            onClick={this.handleNext}
          >
            <FontAwesomeIcon size="2x" icon="chevron-right" />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default CV;
