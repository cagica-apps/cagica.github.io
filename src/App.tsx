import "./styles/App.scss";

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import IconButton from "@material-ui/core/IconButton";

import CV from "./components/CV";
import Profile from "./components/Profile";
import Work from "./components/Work";

const styles = {
  root: {
    flexGrow: 1
  }
};

class App extends React.Component {
  public state = {
    value: 0
  };

  public handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  public render() {
    const { value } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapper">
            <div className="left-col">
              <h2>Sérgio Cagica</h2>
              <h5>Mobile Developer</h5>
            </div>
            <span className="spacer"/>
            <div className="right-col">
              <Tabs
                className="Nav"
                value={value}
                onChange={this.handleChange}
                indicatorColor="#81808B"
                centered={false}
              >
                <Tab disableRipple label="Profile" />
                <Tab disableRipple label="CV" />
                <Tab disableRipple label="Work" />
                {/*<Tab disableRipple label="ChatBot" />*/}
              </Tabs>

              {/*  <IconButton href="tel:+351918961372" target="_blank" aria-label="Telephone">
                <FontAwesomeIcon size="2x" icon="mobile-alt" />
              </IconButton> */}
              <IconButton
                href="mailto:sergio.pcagica@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <FontAwesomeIcon size="2x" icon="at" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/sergio-cagica/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} />
              </IconButton>
              <IconButton
                href="https://stackoverflow.com/users/3620324/pcagica"
                target="_blank"
                aria-label="StackOverflow"
              >
                <FontAwesomeIcon size="2x" icon={["fab", "stack-overflow"]} />
              </IconButton>
              <IconButton
                href="https://github.com/cagica"
                target="_blank"
                aria-label="Github"
              >
                <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="App-body">
          {value === 0 && <Profile />}
          {value === 1 && <CV />}
          {value === 2 && <Work />}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
