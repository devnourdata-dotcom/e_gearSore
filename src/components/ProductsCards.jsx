import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductsCards() {
  const products = useSelector((state) => state.products.data);  
  
  return (
    <div className="grid grid-cols-4 gap-10 ">
      {products.map((product) => (
        <Link to={`/product/${product.id}`}>
          <div
            key={product.id}
            className="flex justify-center cursor-pointer"
            onClick={() => {
              sessionStorage.setItem("productId", product.id);
            }}
          >
            <ProductCard
              name={product.name}
              image={product.images[0]}
              price={product.originalPrice}
              discountPrice={product.discountPercentage}
              id={product.id}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
