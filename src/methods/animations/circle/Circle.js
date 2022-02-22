import { useEffect, useRef } from "react";
import "./Circle.css";

export default function Circle({ View, from, name, delay }) {
  const container = useRef();
  // window.document.getElementById("s").clientWidth;
  // window.document.getElementById("s").clientHeight;

  useEffect(() => {
    let width;
    let height;
    if (container.current) {
      container.current.parentElement.style.position = "relative";
      width = container.current.parentElement.clientWidth - 50;
      height = container.current.parentElement.clientHeight - 50;
    }
    const styleEle = document.createElement("style");
    const rules = document.createTextNode(`@keyframes ${name} {
      0% {
        right:${from.right}px;
        left: ${from.left}px;
        bottom:${from.bottom}px;
        top:${from.top}px;
        transform:  scale(.7);
        opacity: 0.1;
      }
      25% {
        transform: scale(1);
        opacity: .7;
      }
    
      50% {
        right:${width - from.right * 2}px;
        left: ${width - from.left * 2}px;
        bottom:${height - from.bottom * 2}px;
        top:${height - from.top * 2}px;
        transform:  scale(.7);
        opacity: 0.1;
      }
    
      75% {
        transform: scale(1);
        opacity: .7;
      }
    
      100% {
        right:${from.right}px;
        left: ${from.left}px;
        bottom:${from.bottom}px;
        top:${from.top}px;
        transform: scale(.7);
        opacity: 0.1;
      }
    }`);
    styleEle.appendChild(rules);
    document.getElementsByTagName("head")[0].appendChild(styleEle);
    // console.log(document.getElementsByTagName("head")[0]);
    if (container.current) {
      container.current.style.animation = `${name} 20s ease-in-out ${delay} infinite reverse`;
      container.current.style.position = "absolute";
      container.current.style.top = from.top;
      container.current.style.left = from.left;
      container.current.style.right = from.right;
      container.current.style.bottom = from.bottom;
    }
  });

  return (
    <div ref={container} className="">
      {View}
    </div>
  );
}
