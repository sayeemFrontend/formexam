import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import StarIcon from "@heroicons/react/outline/StarIcon";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../App";
import Button from "../../../components/button/Button";
import { discountedPrice, ratingToArray } from "../../../methods/calculations/calculations";
import "./Details.css";

export default function Details({ item }) {
  const [imgList, updateImgList] = useState([item.image, item.image, item.image]);
  const { value, dispatch } = useContext(CartContext);

  const sizes = [
    { id: 1, title: "S", value: "small" },
    { id: 2, title: "M", value: "medium" },
    { id: 3, title: "L", value: "large" },
    { id: 4, title: "XL", value: "extraLarge" },
  ];
  const [activeImg, setActiveImg] = useState(imgList[0]);
  const [selSize, setSelSize] = useState(sizes[3]);

  // const discountedPrice = (discount) => {
  //   const price = item.price - item.price * (discount / 100);
  //   return Math.floor(price);
  // };
  // const ratingLn = Math.floor(item.rating.rate);
  // const tempArray = [];
  // for (let i = 0; i < ratingLn; i++) {
  //   tempArray.push(i);
  // }
  return (
    <div className="details py-10 ">
      <h5 className="text-primary-800 mb-6 te">Fashion club exclusives / Outdoor</h5>
      <div className="flex flex-col lg:flex-row">
        <div className="leftPart w-full lg:w-1/2">
          <div className="imgFrame bg-primary-300 mb-6 ">
            <img src={activeImg} alt="productImage" />
          </div>
          <div className="slider">
            <div className="flex flex-row justify-between items-center">
              {imgList?.map((img, index) => (
                <div className="p-2 " key={index}>
                  <div onClick={() => setActiveImg(img)} className="cursor-pointer">
                    <img src={img} alt="subImg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rightPart p-10 w-full lg:w-1/2">
          <h6 className="mb-3 text-primary-700">Fashion club exclusives</h6>
          <h2 className="mb-1 text-primary-900">{item.title}</h2>
          <h6 className="mb-3 text-primary-700 text-sm">{item.category}</h6>
          <p className=" mb-3 text-base text-justify text-primary-700">{item.description}</p>

          <ul className="price mb-4 list-none w-32 flex items-center justify-between">
            <li className="line-through text-primary-700 text-lg">${item.price}</li>
            <h2 className=" text-primary-900">
              <span className="text-base md:text-lg xl:text-2xl">$</span>
              <span className="">{discountedPrice(item.discount || 30, item.price)}</span>
            </h2>
          </ul>

          <div className="sizeBox mb-5">
            <div className="flex items-center flex-wrap">
              {sizes.map((sz) => (
                <div key={sz.id} onClick={() => setSelSize(sz)} className={"size w-16 h-12 m-4 cursor-pointer first:m-0 last:m-0 centerXY text-secondary-700 border border-secondary-100 border-solid " + (sz.id === selSize.id ? "border-secondary-700" : "")}>
                  {sz.title}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 flex flex-wrap items-center ">
            <div className="btnContainer w-32 h-10 mr-10 bg-primary-100 text-secondary-600 border border-primary-300 border-solid">
              <Button onClicked={() => dispatch(item)} title="Add to bag" />
            </div>
            <div className="btnContainer my-3 w-36 h-10 bg-secondary-600 text-primary-100">
              <Button title="Purchase now" />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <h5 className="flex-1 text-primary-700 font-semibold">Product details</h5>
            <div className="color flex w-14 justify-evenly items-center">
              <div className="w-3 h-3 rounded-full bg-secondary-600"></div>
              <div className="w-3 h-3 rounded-full bg-primary-800"></div>
              <div className="w-3 h-3 rounded-full bg-primary-400"></div>
            </div>
            <div className="ml-2 text-primary-400 w-4">
              <ChevronRightIcon />
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <h5 className="flex-1 text-primary-700 font-semibold">Product reviews</h5>
            <div className="rating flex items-center">
              <div className="flex flex-nowrap items-center">
                {ratingToArray(item.rating.rate)?.map((item) => (
                  <div key={item} className="mr-1">
                    <StarIcon className="w-4 text-secondary-400" />
                  </div>
                ))}
                <span className="text-primary-600">
                  {item.rating.rate}({item.rating.count})
                </span>
              </div>
            </div>
            <div className="ml-2 text-primary-400 w-4">
              <ChevronRightIcon />
            </div>
          </div>

          <div className="flex items-center">
            <h5 className="flex-1 text-primary-700 font-semibold">Product details</h5>
            <h6 className="text-primary-600">Free shipping</h6>
            <div className="ml-2 text-primary-400 w-4">
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
