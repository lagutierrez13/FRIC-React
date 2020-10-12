import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import { XPanel, PageTitle } from '../../../components'

class ConfigurationTables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panelVisible: true
    }
  }

  render() {
    const { panelVisible } = this.state
    const onHide = e => this.setState({ panelVisible: !panelVisible })

    return (
      <div>
        <PageTitle showSearch title="Configuration" onSearch={ text => console.log(text) }/>
        <Clearfix/>
        <Row>
          <Col md={ 6 } sm={ 6 } xs={ 12 }>
            <XPanel visible={ panelVisible } onHide={ onHide }>
              <XPanel.Title title="Event Configuration" >
                <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
                <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
              </XPanel.Title>
              <XPanel.Content>
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ConfigurationTables
