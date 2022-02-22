import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";
export default function Input({ label, type, onChanged, name, placeholder, icon }) {
  const inputRef = useRef();

  const handleSearchClick = () => {
    inputRef.current.focus();
  };
  return (
    <div className="inputContainer px-2 w-full h-full bg-inherit text-base ">
      <div className="flex items-center">
        <input ref={inputRef} type={type ? type : "text"} onChange={onChanged && onChanged} placeholder={placeholder && placeholder} name={name && name} />
        {icon && <SearchIcon onClick={handleSearchClick} className="search  ml-auto w-7 text-primary-600" />}
      </div>
    </div>
  );
}
