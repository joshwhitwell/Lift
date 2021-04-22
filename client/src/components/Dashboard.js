//modules
import { useContext } from "react";

//contexts
import { UserContext } from "../contexts/UserContext";

//Dashboard
function Dashboard() {
  const user = useContext(UserContext);
  return <div>Welcome {user?.displayName}</div>;
}

export default Dashboard;
