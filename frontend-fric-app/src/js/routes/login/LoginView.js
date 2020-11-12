import React, { Component } from "react";
import axios from "axios";
import Link from "react-router-dom/Link";
import { Button } from "react-bootstrap";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initials: "",
    };
  }

  onChangeInitials(e) {
    this.setState({
      initials: e.target.value,
    });
  }

  onSubmitRegister(e) {
    e.preventDefault();
    const newAnalyst = {
      initials: this.state.initials,
      first: "",
      last: "",
      title: "",
      ip: "",
      isLead: "",
      progress: 0,
    };
    console.log(newAnalyst);
  }

  onSubmitLogin(e) {
    e.preventDefault();
    const analystData = {
      initials: this.state.initials,
    }
    console.log(analystData)
  }

  render() {
    return (
      <body className="login">
          <div className="login_wrapper">
            <div className="animate form login_form">
              <section className="login_content">
                <form onSubmit={this.onSubmit}>
                  <h2>Finding and Reporting Information Console</h2>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Initials"
                      required=""
                    />
                  </div>
                  <Link to="/home/Analyst">
                    <Button>Login</Button>
                  </Link>
                  <Link to="/home/event">
                    <Button>Register</Button>
                  </Link>
                </form>
              </section>
            </div>
          </div>
      </body>
    );
  }
}
export default LoginView;
