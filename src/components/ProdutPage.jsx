import Button from "./Button";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const [image, setImage] = useState(0);
  const products = useSelector((state) => state.products.data);
  const id = sessionStorage.getItem("productId");
  const product = products[id - 1];
  // console.log("----------------------------------------------------------------")
  // console.log(id)
  return (
    <div className="flex justify-evenly gap-50">
      <div className="flex">
        <div className="flex gap-10 h-fit flex-col mt-20">
          {product.images.map((img, index) => (
            <img
              key={index}
              className={`w-20 cursor-pointer
           ${image === index ? "border-2 border-primary" : ""}`}
              src={img}
              alt=""
              onClick={() => {
                setImage(index);
              }}
            />
          ))}
        </div>
        <div className="w-150">
          <img className="w-full p-20" src={product.images[image]} alt="ring" />
        </div>
      </div>
      <div className=" flex flex-col items-center w-150">
        <div className="p-10 flex flex-col gap-10">
          <p className="text-4xl font-bold">{product.name}</p>
          <p className="text-xl">{product.description}</p>
          <div className="flex gap-1">
            <p
              className={`${product.discountPercentage !== null && "line-through text-textSecondary"} text-3xl`}
            >
              {product.originalPrice}
            </p>
            {product.discountPercentage && (
              <p className="bg-attention text-white text-3xl ">
                -{product.discountPercentage}%
              </p>
            )}
            {product.discountPercentage && (
              <p className="text-3xl">
                {parseInt(product.originalPrice -
                  (product.originalPrice * product.discountPercentage) / 100)}
              </p>
            )}
          </div>
        </div>
        <div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
