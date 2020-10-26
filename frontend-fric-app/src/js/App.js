import {LoginForm} from "./routes/home/login/LoginForm";

export default function (React, Router, history, Left, Top, Footer, PageContent, Menu) {

  class App extends React.Component {
    render() {
      return (

        <Router history={history}>
          <div>

            <div className="App">
              {/* <LoginForm/>*/}
            </div>
            <div className="container body">
              <div className="main_container">
                <Left>
                  {Menu}
                </Left>
                <Top/>
                <PageContent/>
                <Footer/>
              </div>
            </div>
          </div>

        </Router>

      );
    }

  }

  return App;

};
