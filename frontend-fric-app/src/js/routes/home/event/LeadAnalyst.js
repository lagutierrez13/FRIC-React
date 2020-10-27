import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class LeadAnalyst extends Component {
  onRemoveLeadAnalyst = (id) => {
    axios
    .delete(`http://localhost:4000/analyst/delete/${id}`)
    .then((res) => console.log(res.data));
    console.log("Lead removed");
  };

  onDemoteLeadAnalyst = (id) => {
    axios
      .put(`http://localhost:4000/analyst/promotedemote/${id}`)
      .then((res) => console.log(res.data));
    console.log("Lead demoted");
  };

  render() {
    const { _id, initials } = this.props.leadAnalyst;
    return (
      <tr>
        <td>
          <button
            class="btn btn-warning"
            type="button"
            onClick={() => this.onDemoteLeadAnalyst(_id)}
          >
            Demote
          </button>
          <button
            class="btn btn-danger"
            type="button"
            onClick={() => this.onRemoveLeadAnalyst(_id)}
          >
            Remove
          </button>
        </td>
        <td>{initials}</td>
        <td>
          <Link to={"/update/" + _id}>Edit</Link>
        </td>
      </tr>
    );
  }
}

export default LeadAnalyst;
