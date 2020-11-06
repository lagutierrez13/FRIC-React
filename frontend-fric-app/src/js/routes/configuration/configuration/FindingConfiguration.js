import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { XPanel } from "../../../components";
import FindingStatusTable from "./Finding/FindingStatusTable";
import FindingTypeTable from "./Finding/FindingTypeTable";
import FindingClassificationTable from "./Finding/FindingClassificationTable";
import FindingImpactLevelTable from "./Finding/FindingImpactLevelTable";
import PostureTable from "./Finding/PostureTable";
import ConfidentialityTable from "./Finding/ConfidentialityTable";
import IntegrityTable from "./Finding/IntegrityTable";
import AvailabilityTable from "./Finding/AvailabilityTable";
import RelevanceTable from "./Finding/RelevanceTable";
import EffectivenessRating from "./Finding/EffectivenessRating";

class FindingConfiguration extends Component {
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
      <Row>
        <Col md={12} sm={12} xs={12}>
          <XPanel visible={panelVisible} onHide={onHide}>
            <XPanel.Title title="Finding/System Configuration">
              <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
              <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
            </XPanel.Title>
            <XPanel.Content>
              <FindingStatusTable />
              <FindingTypeTable />
              <FindingClassificationTable />
              <FindingImpactLevelTable />
              <PostureTable />
              <ConfidentialityTable />
              <IntegrityTable />
              <AvailabilityTable />
              <RelevanceTable />
              <EffectivenessRating />
            </XPanel.Content>
          </XPanel>
        </Col>
      </Row>
    );
  }
}

export default FindingConfiguration;
