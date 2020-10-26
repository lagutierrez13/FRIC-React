import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../components";
import LoginForm from "./home/login/LoginForm"

export default class LoginView extends Component {
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
                <Clearfix />
                <Row>
                    <Col md={12} sm={12} xs={12}>
                        <XPanel visible={panelVisible} onHide={onHide}>
                            <XPanel.Title title="Login Form"></XPanel.Title>
                            <XPanel.Content>
                                <LoginForm />
                            </XPanel.Content>
                        </XPanel>
                    </Col>
                </Row>
            </div>
        );
    }
}

