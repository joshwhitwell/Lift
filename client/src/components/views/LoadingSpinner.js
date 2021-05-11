//modules
import Loader from "react-loader-spinner";

//styles
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//LoadingSpinner
function LoadingSpinner() {
  return (
    <Loader
      type="Grid"
      color="#00BFFF"
      height={100}
      width={100}
      className="Main"
    />
  );
}

export default LoadingSpinner;
