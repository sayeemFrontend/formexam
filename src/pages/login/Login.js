import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/loginForm/LoginForm";
import "./Login.css";

export default function Login(params) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product/1");
  };

  return (
    <div className="login w-screen h-screen bg-gradient-to-l bg-primary-800 left-0 top-0 fixed">
      <div className="formContainer w-11/12 md:w-96 h-max centerXY transCenter  bg-secondary-100 text-primary-700 px-4 py-8">
        <LoginForm onClicked={handleClick} />
      </div>
    </div>
  );
}
