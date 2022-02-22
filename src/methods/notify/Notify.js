import { useEffect, useRef } from "react";
import classes from "./Notify.module.css";

export default function Notify({ viewList, position }) {
  const parentRef = useRef();

  function returnStyle() {
    let styles;
    switch (position) {
      case "top-left":
        styles = classes.topLeft;
        break;
      case "top-right":
        styles = classes.topRight;
        break;
      case "bottom-left":
        styles = classes.bottomLeft;
        break;
      case "bottom-right":
        styles = classes.bottomRight;
        break;
      case "top-middle":
        styles = classes.topMiddle;
        break;

      default:
        styles = classes.middle;
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
    <div className={classes.notify}>
      <div ref={parentRef} className={classes.notifyContainer + " " + returnStyle()}>
        {viewList?.map((v) => (
          <div className={classes.singleView}>{v}</div>
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
