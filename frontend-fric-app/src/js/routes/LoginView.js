import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../components";
import axios from "axios";
import Link from "react-router-dom/Link";
import {Button} from "react-bootstrap";


class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panelVisible: true,
        };
        this.state = {initials: ""}
    }

  onChangeInitials(e){
    this.setState({
      initials: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    console.log("Initials submitted");
    const newInitials = {initials: this.state.initials,};
    axios.post("http://localhost:4000/login/authenticate", newInitials).then((res) => console.log(res.data));
    this.state({
      initials: ""
    });
  }

    render() {
        const { panelVisible } = this.state;
        const onHide = (e) => this.setState({ panelVisible: !panelVisible });

        return (
          <body className="login">
          <div>
            <div className="login_wrapper" ref={this.props.containerRef}>
              <div className="animate form login_form">
                <section className="login_content" ref={this.props.containerRef}>
                  <form onSubmit={this.onSubmit}>
                    <h1>Login Form</h1>
                    <div>
                      <input type="text" className="form-control" placeholder="Initials" required=""/>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div className="clearfix"></div>
                      <Link to="/home/Analyst">
                          <Button renderAs="button">
                            <span>Login</span>
                          </Button>
                      </Link>
                    <div className="separator">
                      <p className="change_link">New Event?
                        <Link to="/home/event">
                          <Button /*renderAs="button"*/ className="btn btn-default" type="submit">
                            <span>Create Event</span>
                          </Button>
                        </Link>
                      </p>
                      <div className="clearfix"></div>
                      <br/>
                    </div>
                  </form>
                </section>
               </div>
            </div>
          </div>
        </body>
            // <div class="x_panel">
            //     <Row>
            //         <Col md={12} sm={12} xs={12}>
            //             <XPanel visible={panelVisible} onHide={onHide}>
            //                 <XPanel.Title title="Login" ></XPanel.Title>
            //                     <XPanel.Content>
            //                         <form>
            //                             <Row>
            //                                 <Col md={6} sm={12} xs={12}>
            //                                     <div class="form-group row">
            //                                         <input type="text" className="form-control" placeholder="Initials" required=""/>
            //                                     </div>
            //                                 </Col>
            //                             </Row>
            //                             <div class="item form-group">
            //                               <Link to="/home/Analyst">
            //                                 <Button renderAs="button">
            //                                   <span>Login</span>
            //                                 </Button>
            //                               </Link>
            //                               <Link to="/home/event">
            //                                 <Button /*renderAs="button"*/ className="btn btn-default" type="submit">
            //                                   <span>Create Event</span>
            //                                 </Button>
            //                               </Link>
            //                             </div>
            //                         </form>
            //                     </XPanel.Content>
            //             </XPanel>
            //         </Col>
            //     </Row>
            // </div>
        );
    }
}
export default LoginView;

