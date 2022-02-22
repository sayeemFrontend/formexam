import { useEffect, useRef } from "react";
import "./Notify.css";

export default function Notify({ viewList, position }) {
  const parentRef = useRef();

  function returnStyle() {
    let styles;
    switch (position) {
      case "top-left":
        styles = "topLeft";
        break;
      case "top-right":
        styles = "topRight";
        break;
      case "bottom-left":
        styles = "bottomLeft";
        break;
      case "bottom-right":
        styles = "bottomRight";
        break;
      case "top-middle":
        styles = "topMiddle";
        break;

      default:
        styles = "middle";
        break;
    }
    return styles;
  }
  useEffect(() => {
    let children = parentRef.current.children;
    Object.keys(children).map((i) =>
      setTimeout(() => {
        children[i].style.display = "none";
        // parentRef.current.removeChild(parentRef.current.children[i].firstChild);
      }, [4000])
    );
  }, [viewList]);
  return (
    <div className="notify">
      <div ref={parentRef} className={"notifyContainer " + returnStyle()}>
        {viewList?.map((v) => (
          <div className="singleView">{v}</div>
        ))}
      </div>
    </div>
  );
}

// demo to render
// const [viewList, updateViewList] = useState([]);
//   const view = <h4 className="text-secondary-400">Sorry BackEnd is not connected Right Now</h4>;

//   const handleForm = () => {
//     updateViewList([...viewList, view]);
//   };
