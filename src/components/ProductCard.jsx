import { useState } from "react";
import Heart from "./icons/heart";
export default function ProductCard({ name, image, price, discountPrice,id }) {
  const [isFav, setIsFav] = useState(false);

  return (
    <div
      className="
      p-10
      w-fit
      h-fit
      flex
      flex-col
      justify-start
      items-center
      gap-5
      cursor-pointer
      hover:bg-primaryHoverFocus
      "
      
    >
      <div className="">
        <button
          className="cursor-pointer relative top-10 left-40"
          onClick={(e) => {
            e.preventDefault();
            setIsFav(!isFav);
          }}
        >
          {isFav ? <Heart isFav /> : <Heart />}
        </button>
        <img
          className="
        w-50
        h-50
        "
          src={image}
          alt={name}
        />
      </div>
      <div
        className="
      flex
      flex-col
      justify-center
      items-start
      gap-2
      w-full
      "
      >
        <div>
          <h1 className="text-2xl">{name}</h1>
        </div>
        <div className={`flex gap-3 text-xl`}>
          <h3
            className={`${discountPrice !== null && "line-through text-textSecondary"}`}
          >
            {price}
          </h3>
          {discountPrice !== null && (
            <h3 className="bg-attention text-white">-{discountPrice}%</h3>
          )}
          <h3>
            {discountPrice !== null && parseInt(price - (price * discountPrice) / 100)}
          </h3>
        </div>
      </div>
    </div>
  );
}
