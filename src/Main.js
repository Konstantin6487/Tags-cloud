import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Cloud from "./Cloud";
import Label from "./Label";

const url = "http://5b57901388d93a0014b02650.mockapi.io/tagscloud";

export default class Main extends Component {
  static defaultProps = {
    labels: []
  };

  state = {
    labels: this.props.labels
  };

  async componentDidMount() {
    try {
      const resp = await axios(url);
      this.setState({ labels: resp.data });
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Cloud {...props} labels={this.state.labels} />}
          />
          <Route
            path="/:id"
            render={props => <Label {...props} labels={this.state.labels} />}
          />
        </Switch>
      </Router>
    );
  }
}
