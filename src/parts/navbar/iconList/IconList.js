import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import UserIcon from "@heroicons/react/outline/UserIcon";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/input/Input";
import "./IconList.css";

export default function IconList(params) {
  const [modal, setModal] = useState(false);
  const divRef = useRef();
  const navigate = useNavigate();

  const clickFun = (e) => {
    if (modal && divRef.current && !e.target.contains(divRef.current)) {
      setModal(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", clickFun);
    return () => window.removeEventListener("click", clickFun);
  });

  return (
    <div className="iconList centerY justify-between">
      <div className="inputWidth mx-1 md:mx-3 text-primary-700">
        <Input icon />
      </div>
      <div className="w-24 md:w-32 centerY justify-between">
        <div className="w-5 md:w-6 text-primary-600 cursor-pointer relative">
          <UserIcon onClick={() => setModal(!modal)} />
          <div ref={divRef} className={"w-24 text-center p-4 list-none transCenter top-20 bg-primary-50 shadow-sm shadow-primary-600 " + (modal ? "block" : "hidden")}>
            <li onClick={() => navigate("/") & setModal(false)} className=" mb-2 border-b border-b-primary-300 hover:text-secondary-500">
              Login
            </li>
            <li onClick={() => navigate("/") & setModal(false)} className="border-b border-b-primary-300 hover:text-secondary-500">
              LogOut
            </li>
          </div>
        </div>
        <div className="w-5 md:w-6 text-primary-600 cursor-not-allowed">
          <HeartIcon />
        </div>
        <div className="w-5 md:w-6 text-primary-600 cursor-not-allowed">
          <ShoppingBagIcon className="text-xs" />
        </div>
      </div>
    </div>
  );
}
