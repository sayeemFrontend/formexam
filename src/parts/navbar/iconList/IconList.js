import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import UserIcon from "@heroicons/react/outline/UserIcon";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../../components/search/Search";
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
      <div className="w-48 md:w-64 centerY justify-between">
        <div className="w-24 searchContainer  text-primary-700">
          <Search icon />
        </div>
        <div className="w-5 md:w-6 text-primary-600 cursor-pointer relative">
          <UserIcon onClick={() => setModal(!modal)} />
          <div ref={divRef} className={"w-24 text-center py-4 list-none transCenter top-20 bg-primary-50 shadow-sm shadow-primary-600 " + (modal ? "block" : "hidden")}>
            <li onClick={() => navigate("/") & setModal(false)} className=" mb-2 border-b border-b-secondary-100 hover:text-secondary-500">
              Login
            </li>
            <li onClick={() => navigate("/") & setModal(false)} className="border-b border-b-secondary-100 hover:text-secondary-500">
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
