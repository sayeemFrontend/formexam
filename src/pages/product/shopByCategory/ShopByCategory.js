import { cateImg } from "./data/data";
import "./ShopByCategory.css";

export default function ShopByCategory({ items }) {
  return (
    <div className="shopByCategory">
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        {items?.map((item, index) => (
          <div key={index} className="p-4">
            <div className="centerXY w-32 h-36 group lg:w-60 lg:h-64 bg-primary-400 cursor-pointer relative">
              <h4 className="transCenter z-10  text-primary-100 hidden group-hover:block">{item}</h4>
              <div className="absolute w-full h-full left-0 top-0 group-hover:opacity-70 ">
                <img src={cateImg[index] ? cateImg[index] : ""} alt="img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
