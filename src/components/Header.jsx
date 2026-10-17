import { useState } from "react";
import { Link } from "react-router-dom";

// ---------components----------
import Input from "./Input";

export default function Header() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  // ----------handel events-------------
  function handleSetSearch(e) {
    setSearch(e);
  }
  // ------------------------------
  return (
    <>
    <div className="absolute z-50">
      <div className="fixed bg-bgPrimary w-full top-0 shadow-lg !rounded-none p-2">
        <div className="flex p-10 justify-around w-full">
          <div>
            <img className="w-40" src="/logo-svg.svg" alt="logo" />
          </div>
          <Input
            className="w-1/2 "
            placeholder="Search"
            value={search}
            onChange={handleSetSearch}
          />
          <div>
            <div className="flex gap-5">
              <img
                className="w-10"
                src="/account-svgrepo-com.svg"
                alt="account"
              />
              <img className="w-10" src="/heart-gold.svg" alt="favorites" />
              <img
                className="w-10"
                src="/bag-shopping-svgrepo-com.svg"
                alt="shopbag"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around ">
          <div
            className="cursor-pointer flex flex-col items-center"
            onClick={() => {
              setType("all");
            }}
          >
            <p>all categories</p>
            {type === "all" && (
              <div className="h-1 bg-primary w-[110%] rounded-full"></div>
            )}
          </div>
          <div
            className="cursor-pointer flex flex-col items-center"
            onClick={() => {
              setType("ring");
            }}
          >
            <p>ring</p>
            {type === "ring" && (
              <div className="h-1 bg-primary w-[110%] rounded-full"></div>
            )}
          </div>
          <div
            className="cursor-pointer flex flex-col items-center"
            onClick={() => {
              setType("necklace");
            }}
          >
            <p>necklace</p>
            {type === "necklace" && (
              <div className="h-1 bg-primary w-[110%] rounded-full"></div>
            )}
          </div>
          <div
            className="cursor-pointer flex flex-col items-center"
            onClick={() => {
              setType("earring");
            }}
          >
            <p>earring</p>
            {type === "earring" && (
              <div className="h-1 bg-primary w-[110%] rounded-full"></div>
            )}
          </div>
          <div
            className="cursor-pointer flex flex-col items-center"
            onClick={() => {
              setType("bracelet");
            }}
          >
            <p>bracelet</p>
            {type === "bracelet" && (
              <div className="h-1 bg-primary w-[110%] rounded-full"></div>
            )}
          </div>
        </div>
      </div>
      </div>
      <div className="h-50"></div>
      </>
      

  );
}
