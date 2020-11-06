
import MainRouter from "./routes/MainRouter";


export default function (
  React,
  Router,
  history,

) {
  class App extends React.Component {
    render() {
      return (
        <Router history={history}>
          <MainRouter />
        </Router>
      );
    }
  }

  return App;
}
