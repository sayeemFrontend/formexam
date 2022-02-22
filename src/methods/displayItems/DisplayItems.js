import "./DisplayItems.css";

export default function DisplayItems({ items, View, center, end, evenly, column }) {
  return (
    <div className="displayItems">
      <div className={"flex  md:items-center flex-wrap " + ((column && "flex-col") || (center && "justify-center") || (end && "justify-end") || (evenly && "justify-evenly"))}>
        {items?.map((item) => (
          <div key={item.id ? item.id : item} className="item">
            <View item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
