import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
const System = props => (
  <tr>
      <td>{props.system.name}</td>
      <td>{props.system.no_of_tasks}</td>
      <td>{props.system.no_of_findings}</td>
      <td>
          <Link to={"/update/"+props.system._id}>Edit</Link>
      </td>
  </tr>
)

class SystemTable extends Component {


    constructor(props) {
          super(props);
          this.state = {systems: []};
    }

    componentDidMount() {
      axios.get('http://localhost:4000/home/systems/get')
        .then(response => {
            this.setState({ systems: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
    }

    systemList() {
        return this.state.systems.map(function(currentSystem, i){
            return <System system={currentSystem} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>System Overview</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th>System Name</th>
                        <th>No. of Tasks</th>
                        <th>No. of Findings</th>
                        <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.systemList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default SystemTable;
