import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import "./Search.css";

export default function Search({ label, onChanged, name, placeholder, icon }) {
  const inputRef = useRef();

  const handleSearchClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="search w-full">
      <div className="flex items-center">
        <input ref={inputRef} type="text" onChange={onChanged && onChanged} placeholder={placeholder && placeholder} name={name && name} />
        {icon && <SearchIcon onClick={handleSearchClick} className="w-7 md:w-8 text-primary-600 cursor-pointer" />}
      </div>
    </div>
  );
}
