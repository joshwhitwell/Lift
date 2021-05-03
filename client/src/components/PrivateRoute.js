const { Route, Redirect } = require("react-router");

function PrivateRoute(props) {
  const Component = props.component;
  const loggedIn = window.localStorage.getItem("loggedIn");
  return <Route>{loggedIn ? <Component /> : <Redirect to="/" />}</Route>;
}

export default PrivateRoute;
