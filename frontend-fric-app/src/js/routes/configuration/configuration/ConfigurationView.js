import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../../../components";
import EventConfiguration from "./EventConfiguration";
import FindingConfiguration from "./FindingConfiguration";

class ConfigurationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelVisible: true,
    };
  }

  render() {
    const { panelVisible } = this.state;
    const onHide = (e) => this.setState({ panelVisible: !panelVisible });

    return (
      <div>
        <PageTitle
          showSearch
          title="Configuration"
          onSearch={(text) => console.log(text)}
        />
        <Clearfix />
        <EventConfiguration/>
        <FindingConfiguration/>
      </div>
    );
  }
}

export default ConfigurationView
