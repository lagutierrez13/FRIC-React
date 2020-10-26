import React from "react";
import {Row, Col, Clearfix} from "react-bootstrap";
import {Link} from 'react-router-dom';
import axios from "axios";

//import loginImg from "../../login.svg";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {initials: ""}

  }

  onChangeInitials(e) {
    this.setState({
      initials: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Initials submitted");
    const newInitials = {initials: this.state.initials,};
    axios.post("http://localhost:4000/login/authenticate", newInitials).then((res) => console.log(res.data));
    this.state({
      initials: ""
    });
  }

  render() {
    return (
      <body className="login">
      <div>
        <a className="hiddenanchor" id="signup"></a>
        <a className="hiddenanchor" id="signin"></a>

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
                  <a type="submit" className="btn btn-default" href="EventView.js">Log in</a>
                </div>

                <div className="clearfix"></div>

                <div className="separator">
                  <p className="change_link">New Event? </p>
                  {/*<Link to="/createEvent"><button>*/}
                  {/*  Create Event*/}
                  {/*</button>*/}
                  {/*</Link>*/}
                  {/*<Link to="/createEvent">*/}
                  {/*  <button type="button">*/}
                  {/*    Create Event*/}
                  {/*  </button>*/}
                  {/*</Link>*/}

                  <Link to="./CreateEvent.jsx">  Create Event </Link>


                  <div className="clearfix"></div>
                  <br/>

                </div>
              </form>
            </section>
          </div>


        </div>
      </div>
      </body>
    );
  }
}
