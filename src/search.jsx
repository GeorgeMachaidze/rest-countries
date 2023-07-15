import search from "./assets/images/search.png";
import arrow from "./assets/images/arrow.png";
import arrowWhite from "./assets/images/arrow-white.png";
import { useState } from "react";

function SearchBar({
  isDark,
  getSearchData,
  inputValue,
  setInputValue,
  setRegion,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [empty, setEmpty] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value === "") {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getSearchData();
    }
  };

  return (
    <div className="flex flex-col gap-[40px] ml-[16px] mr-[16px] lg:flex-row lg:justify-between">
      <div
        className="input flex items-center shadow-md rounded-[5px] pt-[14px] pb-[14px] pl-[32px] gap-[32px] mt-[24px] lg:w-[480px] lg:ml-[80px] lg:mt-[48px]"
        style={{
          backgroundColor: isDark ? "#2B3844" : "#fff",
        }}
      >
        <img
          src={search}
          alt="search icon"
          onClick={getSearchData}
          className="cursor-pointer"
        />
        <input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{
            backgroundColor: isDark ? "#2B3844" : "#fff",
            color: isDark ? "white" : "black",
          }}
          className="cursor-pointer w-screen focus:outline-none"
          type="text"
          placeholder="Search any country..."
        ></input>
      </div>
      {empty ? null : (
        <h1 className="text-red-500 ml-6 mt-2 lg:pl-[350px] ">
          Whoops, can’t be empty…
        </h1>
      )}
      <div
        className="relative flex items-center w-[200px] gap-[62px] pt-[14px] pb-[14px] pl-[24px] shadow-md rounded-[5px] cursor-pointer lg:mt-[48px] lg:mr-[80px] "
        style={{
          backgroundColor: isDark ? "#2B3844" : "#fff",
        }}
        onClick={toggleMenu}
      >
        <h1 className=" text-[12px] leading-5 font-normal">Filter by Region</h1>
        <img src={isDark ? arrowWhite : arrow} alt="drop down arrow" />
        {isOpen && (
          <div
            style={{
              backgroundColor: isDark ? "#2B3844" : "#fff",
            }}
            className="absolute top-[50px] left-0 w-[200px] shadow-md rounded-[5px] pt-[16px] pb-[16px] pl-[24px] flex flex-col items-start gap-[8px]"
          >
            <button
              className="leading-[16px] text-[12px]"
              onClick={() => setRegion("Africa")}
            >
              Africa
            </button>
            <button
              className="leading-[16px] text-[12px]"
              onClick={() => setRegion("America")}
            >
              America
            </button>
            <button
              className="leading-[16px] text-[12px]"
              onClick={() => setRegion("Asia")}
            >
              Asia
            </button>
            <button
              className="leading-[16px] text-[12px]"
              onClick={() => setRegion("Oceania")}
            >
              Oceania
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
