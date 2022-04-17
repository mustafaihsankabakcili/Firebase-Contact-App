import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = (msg) => {
  toast.success(msg, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export default Toast;
