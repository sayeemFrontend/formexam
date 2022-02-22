import { useEffect, useRef, useState } from "react";
import "./progress.css";

export default function Progress({ label, current, bg, barColor, height }) {
  const barRef = useRef();
  const [parentWidth, setParentWidth] = useState();

  window.addEventListener("resize", () => {
    setParentWidth(barRef.current.parentNode.clientWidth);
  });

  useEffect(() => {
    if (barRef.current) {
      setParentWidth(barRef.current.parentNode.clientWidth);
      barRef.current.style.width = `${parentWidth * (current / 100)}px`;
      barRef.current.style.transition = "all 1.5s ease-out .05s";
    }
  }, [parentWidth, current]);

  return (
    <div className={"progress w-full block rounded-full " + (height ? height : "h-2") + " " + (bg ? bg : "bg-primary-400")}>
      <div ref={barRef} className={`bar w-0 h-full block rounded-full bg-gradient-to-r to-${barColor ? barColor : ""} ${barColor ? barColor : "bg-secondary-300"}`}></div>
    </div>
  );
}
