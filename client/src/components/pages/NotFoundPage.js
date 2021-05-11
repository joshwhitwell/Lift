//modules
import { ReactComponent as NotFoundImage } from "../../assets/svgs/404.svg";

//styles
import "../../styles/NotFoundPage.scss";

//NotFoundPage
function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <NotFoundImage />
    </div>
  );
}

export default NotFoundPage;
