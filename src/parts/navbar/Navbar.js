import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalFull from "../../methods/modal/modalFull/ModalFull";
import IconList from "./iconList/IconList";
import "./Navbar.css";
import TitleList from "./titleList/TitleList";

export default function Navbar(params) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar h-20 bg-white border-b border-b-primary-300">
      {modal && <ModalFull onClicked={() => setModal(false)} View={() => <TitleList onClosed={() => setModal(false)} />} pos="center" width="w-11/12" />}

      <div className="container w-full h-full centerY justify-between">
        <h4 onClick={() => navigate("/")} className="text-primary-700 hidden md:block cursor-pointer">
          FASHION CLUB
        </h4>
        <div onClick={() => setModal(!modal)} className="block md:hidden w-10 text-primary-700 cursor-pointer">
          <MenuIcon className="" />
        </div>
        <div className="hidden md:block  w-2/3 xl:w-1/2 2xl:w-1/3">
          <TitleList />
        </div>
        <div>
          <IconList />
        </div>
      </div>
    </div>
  );
}
