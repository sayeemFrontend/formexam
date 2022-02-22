import "./simple.css";

export default function Simple({ View }) {
  return (
    <div className="simpleSlide">
      <div className="viewContainer">
        <View />
      </div>
    </div>
  );
}
