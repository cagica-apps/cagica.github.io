import * as React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import workData from "./WorkData";

class Work extends React.Component {
  public render() {
    return (
      <div className="App-work">
        <GridList cellHeight={260} spacing={30} cols={3}>
          {workData.map(tile => (
            <GridListTile key={tile.img} cols={1}>
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className="card-img"
                    image={tile.img}
                    title={tile.title}
                  />
                  <CardContent>
                    <h3>{tile.title}</h3>
                    <h5>{tile.title}</h5>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Work;
