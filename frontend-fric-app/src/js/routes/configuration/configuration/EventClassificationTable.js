import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { XPanel } from "../../../components";

class EventClassificationTable extends Component {
  constructor(props) {
    super(props);

    this.onChangeEventClassificationRequired = this.onChangeEventClassificationRequired.bind(
      this
    );
    this.onChangeEventClassificationValueToAdd = this.onChangeEventClassificationValueToAdd.bind(
      this
    );
    this.onAddValue = this.onAddValue.bind(this);
    this.onRemoveValue = this.onRemoveValue.bind(this);
    this.onUpdateValue = this.onUpdateValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      panelVisible: true,
      event_classification_required: false,
      event_classification_value_to_add: "",
      event_classifiaction_values: ["test1", "test2", "test3"],
      is_checked: [],
    };
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submitted`);
    console.log(`Values in list: ${this.state.event_classifiaction_values}`);
    console.log(`Is required: ${this.state.event_classification_required}`);

    this.setState({
      event_classification_value_to_add: "",
    });
  }

  onChangeEventClassificationRequired(e) {
    this.setState({
      event_classification_required: !this.state.event_classification_required
    });
  }

  onChangeEventClassificationValueToAdd = (event) => {
    this.setState({ event_classification_value_to_add: event.target.value });
  };

  onAddValue = () => {
    this.setState((state) => {
      const event_classifiaction_values = state.event_classifiaction_values.concat(
        state.event_classification_value_to_add
      );

      console.log(`Added: ${this.state.event_classification_value_to_add}`);

      return {
        event_classifiaction_values,
        event_classification_value_to_add: "",
      };
    });
  };

  onUpdateValue = (i) => {
    this.setState((state) => {
      const event_classifiaction_values = state.event_classifiaction_values.map(
        (item, j) => {
          if (j == i) {
            return item + 1;
          } else {
            return item;
          }
        }
      );
      return {
        event_classifiaction_values,
      };
    });
  };

  onRemoveValue = (i) => {
    this.setState((state) => {
      const event_classifiaction_values = state.event_classifiaction_values.filter(
        (item, j) => i != j
      );

      return {
        event_classifiaction_values,
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
                  defaultChecked={this.state.event_classification_required}
                  onChange={this.onChangeEventClassificationRequired}
                  name="required"
                  id="eventClassificationRequired"
                />
                <label className="form-check-label">Required</label>
              </div>
              <ul>
                {this.state.event_classifiaction_values.map((item) => (
                  <li>
                    <div className="form-group">
                      <input type="checkbox" />
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
                      value={this.state.event_classification_value_to_add}
                      onChange={this.onChangeEventClassificationValueToAdd}
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
                  disabled={!this.state.event_classification_value_to_add}
                  value="Add"
                  className="btn btn-primary"
                />
                <input
                  type="button"
                  onClick={this.onRemoveValue}
                  disabled={this.state.is_checked != []}
                  value="Remove"
                  className="btn btn-danger"
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
