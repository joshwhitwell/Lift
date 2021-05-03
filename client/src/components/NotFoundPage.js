import { useLocation } from "react-router";

//404
function NotFoundPage() {
  let location = useLocation();
  return (
    <div className="NotFoundPage">
      <p>Sorry, we couldn't find {location.pathname}</p>
    </div>
  );
}

export default NotFoundPage;
