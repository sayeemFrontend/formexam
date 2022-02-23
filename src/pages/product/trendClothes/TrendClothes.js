import { useEffect, useState } from "react";
import ProductCart from "../../../views/product/ProductCart";
import "./TrendClothes.css";

export default function TrendClothes({ items }) {
  return (
    <div className="trending">
      {items?.map((item) => (
        <div key={item.id}>
          <ProductCart item={item} />
        </div>
      ))}
    </div>
  );
}
