import { useEffect, useState } from "react";
import Input from "../../input/Input";
import Button from "../../button/Button";
import "./LoginForm.css";

export default function LoginForm({ onClicked }) {
  const [user, updateUser] = useState({ userName: null, password: null });
  const [error, updateError] = useState({ userName: null, password: null });

  const handleChange = (field, value) => {
    const copy = { ...user };
    copy[field] = value;
    updateUser(copy);
  };

  useEffect(() => {
    if (user.userName !== null && user.userName.length === 0) {
      updateError({ ...error, userName: true });
    } else {
      updateError({ ...error, userName: false });
    }
  }, [user.userName]);

  useEffect(() => {
    if (user.password !== null && user.password.length === 0) {
      updateError({ ...error, password: true });
    } else {
      updateError({ ...error, password: false });
    }
  }, [user.password]);

  const handleClick = () => {
    if (error.userName === false && error.password === false) {
      onClicked();
    }
  };

  return (
    <div className="loginForm h-full w-full">
      <h2 className="pb-4 text-center text-primary-700">Fill The Form</h2>
      <div className="singleBlock">
        <Input err={error.userName} onChanged={(e) => handleChange(e.target.name, e.target.value)} label="UserName" value={user.userName} name="userName" />
      </div>
      <div className="singleBlock">
        <Input err={error.password} onChanged={(e) => handleChange(e.target.name, e.target.value)} label="Password" type="password" value={user.password} name="password" />
      </div>

      {error.password === true || error.userName === true ? <div className="text-center text-secondary-700">Empty Not Allowed</div> : ""}

      <div className="bg-secondary-200 mt-5 hover:bg-secondary-300 bg-gradient-to-b py-2 text-xl  text-primary-800 hover:text-primary-900">
        <Button onClicked={handleClick} title="Login" />
      </div>
    </div>
  );
}
