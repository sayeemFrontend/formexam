import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon";
import { useState } from "react";
import "./TitleView.css";

export default function TitleView({ item }) {
  const [expandId, setExpandId] = useState(null);

  const handleClick = (id) => {
    expandId === id ? setExpandId(null) : setExpandId(id);
  };

  return (
    <div className="titleView px-4 md:px-0  text-primary-600  list-none text-lg lg:text-xl">
      {item.sub ? (
        <div className="item relative">
          <ul onClick={() => handleClick(item.id)} className=" centerY justify-between cursor-pointer my-2 md:my-0">
            <li className="text-base lg:text-lg ">{item.title}</li>
            <li className={"w-4 h-4 ml-3 transform transition-all duration-300 " + (item.id === expandId ? "rotate-180" : "rotate-0")}>
              <ChevronDownIcon />
            </li>
          </ul>
        </div>
      ) : (
        <ul className="centerY cursor-pointer my-2 md:my-0">
          <li className="text-base md:text-lg ">{item.title}</li>
        </ul>
      )}
    </div>
  );
}
