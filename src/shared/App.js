import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1">Col-1</Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">Col-2</Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">Col-3</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default App;
