import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../components";



class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panelVisible: true,
        };
    }

    onSubmit(e) {
        e.preventDefault();
    
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
                                            <button class="btn btn-primary" type="submit">
                                                Login
                                            </button>   
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

