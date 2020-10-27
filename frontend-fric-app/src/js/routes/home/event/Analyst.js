import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Analyst extends Component {
  onRemoveAnalyst = (id) => {
    axios
      .delete(`http://localhost:4000/analyst/delete/${id}`)
      .then((res) => console.log(res.data));
    console.log("Analyst removed");
  };

  onPromoteAnalyst = (id) => {
    axios
      .put(`http://localhost:4000/analyst/promotedemote/${id}`)
      .then((res) => console.log(res.data));
    console.log("Analyst promoted");
  };

  render() {
    const { _id, initials } = this.props.analyst;
    return (
      <tr>
        <td>
          <button
            class="btn btn-success"
            type="button"
            onClick={() => this.onPromoteAnalyst(_id)}
          >
            Promote
          </button>
          <button
            class="btn btn-danger"
            type="button"
            onClick={() => this.onRemoveAnalyst(_id)}
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

export default Analyst;
