import { XIcon } from "@heroicons/react/solid";

export default function ModalFull({ View, pos, width, height, onClicked }) {
  let position;
  switch (pos) {
    case "top":
      position = "top-0";
      break;

    case "left":
      position = "top-0 left-0";
      break;
    case "center":
      position = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 top-44";
      break;
    default:
      position = "right-0 top-0";
  }
  return (
    <div className="modalFull w-screen h-screen fixed z-50 top- bg-primary-700  left-0 top-0">
      <div className={"modalView absolute bg-primary-200 " + position + " " + (width && width) + " " + (height && height)}>
        <div className="modalHeader p-4 flex justify-end ">
          <XIcon onClick={onClicked} className="w-10 h-10 text-primary-500  cursor-pointer" />
        </div>
        <div className="modalBody pb-8">
          <View />
        </div>
        <div className="modalFooter"></div>
      </div>
    </div>
  );
}
