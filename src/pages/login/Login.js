import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./Login.css";

export default function Login(params) {
  return (
    <div className="login w-screen h-screen bg-primary-400 relative">
      <div className="form max-w-sm bg-primary-500 p-4">
        <div className="my-4 customInput">
          <Input type="text" placeholder="Type Your Email" />
        </div>
        <div className="my-4 customInput">
          <Input type="text" placeholder="Type Your Password" />
        </div>

        <div className="w-40 h-10 ml-auto border text-primary-50 border-secondary-200 hover:bg-secondary-300 hover:text-primary-800">
          <Button title="Login" />
        </div>
      </div>
    </div>
  );
}
