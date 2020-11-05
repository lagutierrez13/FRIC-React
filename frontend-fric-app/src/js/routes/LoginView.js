import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../components";
import Link from "react-router-dom/Link";
import {Button} from "react-bootstrap";



class LoginView extends Component {
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
            <div class="x_panel">
                <Row>
                    <Col md={12} sm={12} xs={12}>
                        <XPanel visible={panelVisible} onHide={onHide}>
                            <XPanel.Title title="Login"></XPanel.Title>
                                <XPanel.Content>
                                    <form>
                                        <Row>
                                            <Col md={6} sm={6} xs={12}>
                                                <div class="form-group row">
                                                    <label class="control-label  col-sm-2 ">Initials</label>
                                                    <div class=" col-sm-10 ">
                                                        <input
                                                            type="text"
                                                            class="form-control"

                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div class="item form-group">
                                          <Link to="home">
                                            <Button renderAs="button">
                                              <span>Login</span>
                                            </Button>
                                          </Link>
                                          <Link to="createEvent">
                                            <Button /*renderAs="button"*/ className="btn btn-default" type="submit">
                                              <span>Create Event</span>
                                            </Button>
                                          </Link>
                                        </div>
                                    </form>
                                </XPanel.Content>
                        </XPanel>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default LoginView;

