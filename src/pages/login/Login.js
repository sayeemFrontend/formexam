import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/loginForm/LoginForm";
import Notify from "../../methods/notify/Notify";
import "./Login.css";

export default function Login(params) {
  const [viewList, updateViewList] = useState([]);
  const navigate = useNavigate();

  const view = <h4 className="text-white bg-black">Login Success</h4>;

  const handleClick = () => {
    updateViewList([...viewList, view]);
    navigate("/produce/1");
  };

  return (
    <div className="login w-screen h-screen bg-gradient-to-l bg-primary-200 left-0 top-0 fixed">
      <Notify position="top-middle" viewList={viewList} />
      <div className="formContainer w-11/12 md:w-96 h-max centerXY transCenter  bg-secondary-100 text-primary-700 px-4 py-8">
        <LoginForm onClicked={handleClick} />
      </div>
    </div>
  );
}
