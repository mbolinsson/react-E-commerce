import React, {useEffect} from "react";
import {getProducts} from "../../store/actions/productsActions";
import {useSelector, useDispatch} from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductCardDeck() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
