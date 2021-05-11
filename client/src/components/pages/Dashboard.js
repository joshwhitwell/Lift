//modules
import { ReactComponent as WorkoutImage } from "../../assets/svgs/workout.svg";

//styles
import "../../styles/Dashboard.scss";

//Dashboard
function Dashboard({ user }) {
  return (
    <div className="Dashboard">
      <WorkoutImage />
    </div>
  );
}

export default Dashboard;
