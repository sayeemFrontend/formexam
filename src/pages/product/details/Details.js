import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import "./Details.css";

export default function Details({ item }) {
  const [imgList, updateImgList] = useState([item.image, item.image, item.image]);
  console.log(item);
  const sizes = [
    { id: 1, title: "S", value: "small" },
    { id: 2, title: "M", value: "medium" },
    { id: 3, title: "L", value: "large" },
    { id: 4, title: "XL", value: "extraLarge" },
  ];
  const [activeImg, setActiveImg] = useState(imgList[0]);
  const [selSize, setSelSize] = useState(sizes[3]);

  const discountedPrice = (discount) => {
    const price = item.price - item.price * (discount / 100);
    return Math.floor(price);
  };

  return (
    <div className="details ">
      <h5 className="text-primary-800 mb-5">Fashion club exclusives / Outdoor</h5>
      <div className="flex flex-col lg:flex-row">
        <div className="leftPart w-full lg:w-1/2">
          <div className="imgFrame mb-6 ">
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
        <div className="rightPart w-full lg:w-1/2">
          <h5 className="mb-5">Fashion club exclusives</h5>
          <h2 className="mb-2 text-primary-900">{item.title}</h2>
          <h6 className="mb-5 text-primary-700 text-sm">{item.category}</h6>
          <p className=" mb-5 text-base text-primary-700">{item.description}</p>

          <ul className="price mb-10 list-none w-32 flex items-center justify-between">
            <li className="line-through text-primary-700 text-lg">${item.price}</li>
            <h2 className=" text-primary-900">
              <span className="  text-base md:text-lg xl:text-2xl">$</span>
              <span className="">{discountedPrice(item.discount || 30)}</span>
            </h2>
          </ul>

          <div className="sizeBox mb-5">
            <div className="flex items-center flex-wrap">
              {sizes.map((sz) => (
                <div onClick={() => setSelSize(sz)} className={"size w-16 h-12 m-4 cursor-pointer first:m-0 last:m-0 centerXY text-secondary-700 border border-secondary-100 border-solid " + (sz.id === selSize.id ? "border-secondary-700" : "")}>
                  {sz.title}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center mb-72">
            <div className="btnContainer w-32 h-10 mr-10 bg-primary-100 text-secondary-700 border border-primary-300 border-solid">
              <Button title="Add to bag" />
            </div>
            <div className="btnContainer w-36 h-10 bg-secondary-800 text-primary-100">
              <Button title="Purchase now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
