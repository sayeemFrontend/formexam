import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import ModalFull from "../../methods/modal/modalFull/ModalFull";
import IconList from "./iconList/IconList";
import "./Navbar.css";
import TitleList from "./titleList/TitleList";

export default function Navbar(params) {
  const [modal, setModal] = useState(false);
  return (
    <div className="navbar h-20 bg-primary-50 border-b border-b-primary-300">
      {modal && <ModalFull onClicked={() => setModal(false)} View={() => <TitleList onClosed={() => setModal(false)} />} pos="top" width="w-full" />}

      <div className="container w-full h-full centerY justify-between">
        <h4 className="text-primary-700 hidden md:block">FASHION CLUB</h4>
        <div onClick={() => setModal(!modal)} className="block md:hidden w-10 text-primary-700 cursor-pointer">
          <MenuIcon className="" />
        </div>
        <div className="hidden md:block  w-1/2 xl:w-1/3">
          <TitleList />
        </div>
        <div>
          <IconList />
        </div>
      </div>
    </div>
  );
}
