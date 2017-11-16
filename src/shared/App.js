import React, { Component } from "react";
import { Grid, Header, Card, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    let initialData;
    if (props.initialData) {
      initialData = props.initialData;
    } else {
      initialData = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    }
    this.state = {
      users: initialData
    };
  }

  render() {
    return (
      <Grid columns={3}>
        {
          this.state.users &&
          this.state.users.map(user => (
            <Grid.Column key={user.id}>
              <Card>
                <Image src={user.avatar_url} />
                <Card.Content>
                  <Card.Header>{user.login}</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))
        }
      </Grid>
    );
  }
}
export default App;
