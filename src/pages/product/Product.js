import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Details from "./details/Details";
import "./Product.css";
import ShopByCategory from "./shopByCategory/ShopByCategory";
import TrendClothes from "./trendClothes/TrendClothes";
export default function Product(params) {
  const [product, setProduct] = useState(null);
  const [trendClothes, updateTrendClothes] = useState(null);
  const [categories, updateCategories] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => updateCategories(data));
  }, [param]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => updateTrendClothes(data));
  }, [param]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/ ${param.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [param]);
  const loading = <div className="transCenter text-secondary-600 text-4xl">Loading...</div>;

  if (product === null) {
    return loading;
  }

  return (
    <div className="product">
      <div className="container ">
        {product !== null && (
          <div className="border-b border-b-primary-300 border-solid">
            <Details item={product} />
          </div>
        )}

        {trendClothes !== null && (
          <div className="my-10">
            <div className="mb-10 flex justify-between items-center">
              <h3 className="text-primary-800">Trending clothes</h3>
              <div className="w-24 h-8 bg-primary-50 border border-secondary-400 text-secondary-600">
                <Button title="View all" />
              </div>
            </div>
            <TrendClothes items={trendClothes} />
          </div>
        )}

        {categories !== null && (
          <div className="my-16">
            <div className="mb-10 flex justify-between items-center">
              <h3 className="text-primary-800">Shop by categories</h3>
              <div className="w-24 h-8 bg-primary-50 border border-secondary-400 text-secondary-600">
                <Button title="View all" />
              </div>
            </div>
            <ShopByCategory items={categories} />
          </div>
        )}
      </div>
    </div>
  );
}
