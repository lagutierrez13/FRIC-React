import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { XPanel } from "../../../components";
import axios from "axios";

class EventClassificationTable extends Component {
  constructor(props) {
    super(props);

    this.onChangeRequired = this.onChangeRequired.bind(this);
    this.onChangeValueToAdd = this.onChangeValueToAdd.bind(this);
    this.onAddValue = this.onAddValue.bind(this);
    this.onRemoveValue = this.onRemoveValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      panelVisible: true,
      required: false,
      value_to_add: "",
      values: [],
    };
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submitted`);
    console.log(`Values in list: ${this.state.values}`);
    console.log(`Is required: ${this.state.required}`);

    const newEventClassificationTable = {
      required: this.state.required,
      values: this.state.values,
    };

    axios
      .post(
        "http://localhost:4000/configuration/configuration/eventclassificationtable/add",
        newEventClassificationTable
      )
      .then((res) => console.log(res.data));

    this.setState({
      value_to_add: "",
    });
  }

  onChangeRequired(e) {
    this.setState({
      required: !this.state.required,
    });
  }

  onChangeValueToAdd = (event) => {
    this.setState({ value_to_add: event.target.value });
  };

  onAddValue = () => {
    this.setState((state) => {
      const values = state.values.concat(state.value_to_add);

      console.log(`Added: ${this.state.value_to_add}`);

      return {
        values,
        value_to_add: "",
      };
    });
  };

  onRemoveValue = (i) => {
    this.setState((state) => {
      const values = state.values.filter((item, j) => i != j);

      return {
        values,
      };
    });
  };

  render() {
    const { panelVisible } = this.state;
    const onHide = (e) => this.setState({ panelVisible: !panelVisible });

    return (
      <Col md={6} sm={6} xs={12}>
        <XPanel visible={panelVisible} onHide={onHide}>
          <XPanel.Title title="Event Classification Table">
            <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
            <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
          </XPanel.Title>
          <XPanel.Content>
            <form onSubmit={this.onSubmit}>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked={this.state.required}
                  onChange={this.onChangeRequired}
                  name="required"
                  id="eventClassificationRequired"
                  style={{ marginRight: "10px" }}
                />
                <label className="form-check-label">Required</label>
              </div>
              <ul style={{ listStyleType: "none" }}>
                {this.state.values.map((item, index) => (
                  <li>
                    <div class="form-group">
                      <input
                        type="button"
                        onClick={() => this.onRemoveValue(index)}
                        value="Remove"
                        className="btn btn-danger"
                      />
                      <input
                        value={item}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </li>
                ))}
                <li>
                  <div className="form-group">
                    <input
                      value={this.state.value_to_add}
                      onChange={this.onChangeValueToAdd}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </li>
              </ul>
              <div className="form-group">
                <input
                  type="button"
                  onClick={this.onAddValue}
                  disabled={!this.state.value_to_add}
                  value="Add"
                  className="btn btn-primary"
                />
                <input type="submit" value="Save" className="btn btn-success" />
              </div>
            </form>
          </XPanel.Content>
        </XPanel>
      </Col>
    );
  }
}

export default EventClassificationTable;
