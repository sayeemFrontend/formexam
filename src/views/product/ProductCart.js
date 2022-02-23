import { StarIcon } from "@heroicons/react/outline";
import HeartIcon from "@heroicons/react/outline/HeartIcon";
import { useContext } from "react";
import { CartContext } from "../../App";
import Button from "../../components/button/Button";
import { discountedPrice, ratingToArray } from "../../methods/calculations/calculations";
import "./ProductCart.css";

export default function ProductCart({ item }) {
  const { value, dispatch } = useContext(CartContext);

  return (
    <div className="productCart my-5 w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="leftPart centerXY w-full lg:w-1/4 ">
          <img src={item.image} alt="productImg" />
        </div>
        <div className="rightPart py-5 w-full lg:w-3/4 ">
          <div className="contentContainer">
            <h3 className="mb-3 text-primary-900">{item.title}</h3>
            <p className=" mb-3 text-sm md:text-base text-justify text-primary-700">{item.description}</p>
            <ul className="price mb-4 list-none w-32 flex items-center justify-between">
              <li className="line-through text-primary-700 text-lg">${item.price}</li>
              <h3 className=" text-primary-900">
                <span className="text-base md:text-lg xl:text-2xl">$</span>
                <span className="">{discountedPrice(item.discount || 30, item.price)}</span>
              </h3>
            </ul>
            <div className="mb-4 flex items-center">
              <div className="rating flex items-center">
                <div className="flex flex-nowrap items-center">
                  {ratingToArray(item.rating.rate)?.map((item) => (
                    <div key={item} className="mr-1">
                      <StarIcon className="w-4 text-primary-400" />
                    </div>
                  ))}
                  <span className="text-primary-600">
                    {item.rating.rate}({item.rating.count})
                  </span>
                </div>
              </div>
              <div className="ml-2 text-primary-400 w-4">
                <HeartIcon />
              </div>
            </div>
            <div className="btnContainer w-28 h-10 mr-10 bg-primary-100 text-secondary-600 border border-primary-300 border-solid">
              <Button onClicked={() => dispatch(item)} title="Add to bag" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
