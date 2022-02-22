import { useRef } from "react";
import "./Input.css";

export default function Input({ label, onChanged, name, placeholder, type, value, err }) {
  const labelRef = useRef();

  const handleLabel = () => {
    if (value === "") {
      labelRef.current.style.top = `${50}%`;
    }
  };
  const focusHandle = () => {
    labelRef.current.style.top = `${0}`;
  };

  return (
    <div className={"input " + (err === true ? "err" : "")} onFocus={focusHandle} onBlur={handleLabel}>
      <label ref={labelRef} htmlFor="">
        {label && label}
      </label>

      {type === "textarea" ? <textarea onChange={onChanged && onChanged} name={name && name} placeholder={placeholder ? placeholder : ""} type={type ? type : "text"} value={value} /> : <input onChange={onChanged && onChanged} name={name && name} placeholder={placeholder ? placeholder : ""} type={type ? type : "text"} value={value} />}
    </div>
  );
}
