import "./RoundItem.css";
export default function RoundItem(params) {
  const list1 = [
    { id: 1, title: "HTML", pos: "left-0 top-0" },
    { id: 2, title: "JavaScripts", pos: "top-0 right-0" },
    { id: 3, title: "CSS", pos: "bottom-0 right-0" },
    { id: 4, title: "Hello", pos: "lef-0 bottom-0" },
  ];
  return (
    <div className="roundAnima">
      <div className="itemContainer">
        <div>top</div>
        <div>icon</div>
        <div>bottom</div>
        {/* {list1?.map((li, index) => (
          <div key={li.id} className={"roundItem " + li.pos}>
            <h5>{li.title}</h5>
          </div>
        ))} */}
      </div>
    </div>
  );
}
