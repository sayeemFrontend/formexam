import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./details/Details";
import "./Product.css";
export default function Product(params) {
  const [product, setProduct] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/ ${param.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [param]);

  return (
    <div className="product">
      <div className="container">{product !== null && <Details item={product} />}</div>
    </div>
  );
}
