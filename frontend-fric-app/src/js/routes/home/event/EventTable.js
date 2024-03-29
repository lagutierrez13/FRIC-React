import React, { Component } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import EditEventModal from "./EditEventModal";
import { ProgressBar } from "react-bootstrap";

const Event = (props) => (
  <tr>
    <td>{props.event.name}</td>
    <td>{props.event.no_of_systems}</td>
    <td>{props.event.no_of_findings}</td>
    <td>
      <ProgressBar striped variant="info" now={props.event.progress} />
    </td>
    <td>
      <EditEventModal event={props.event} />
    </td>
  </tr>
);

const EventContentToolTip = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Shows Events information
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

class EventTable extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/home/event/get")
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  eventList() {
    return this.state.events.map(function (currentEvent, i) {
      return <Event event={currentEvent} key={i} />;
    });
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>
            Event Contents Table <EventContentToolTip />
          </h2>

          <div class="clearfix"></div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>No. of Systems</th>
              <th>No. of Findings</th>
              <th>Progress</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.eventList()}</tbody>
        </table>
      </div>
    );
  }
}

export default EventTable;
