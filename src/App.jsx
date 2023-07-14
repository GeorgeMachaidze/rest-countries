import { useState } from "react";
import Header from "./header";
import search from "./assets/images/search.png";
import arrow from "./assets/images/arrow.png";
import arrowWhite from "./assets/images/arrow-white.png";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: isDark ? "#202C36" : "#FAFAFA",
          color: isDark ? "white" : "#111517",
        }}
        className="font-nunito-sans h-screen"
      >
        <Header isDark={isDark} handleToggle={handleToggle}></Header>

        <div className="flex flex-col gap-[40px] ml-[16px] mr-[16px]">
          <div
            className="input flex items-center shadow-md rounded-[5px] pt-[14px] pb-[14px] pl-[32px] gap-[32px] mt-[24px]"
            style={{
              backgroundColor: isDark ? "#2B3844" : "#fff",
            }}
          >
            <img src={search} alt="search icon" />
            <input
              style={{
                backgroundColor: isDark ? "#2B3844" : "#fff",
                color: isDark ? "white" : "black",
              }}
              className="cursor-pointer w-screen focus:outline-none"
              type="text"
              placeholder="Search any country..."
            ></input>
          </div>
          <div
            className="relative flex items-center w-[200px] gap-[62px] pt-[14px] pb-[14px] pl-[24px] shadow-md rounded-[5px]"
            style={{
              backgroundColor: isDark ? "#2B3844" : "#fff",
            }}
            onClick={toggleMenu}
          >
            <h1 className=" text-[12px] leading-5 font-normal">
              Filter by Region
            </h1>
            <img src={isDark ? arrowWhite : arrow} alt="drop down arrow" />
            {isOpen && (
              <div
                style={{
                  backgroundColor: isDark ? "#2B3844" : "#fff",
                }}
                className="absolute top-[50px] left-0 w-[200px] shadow-md rounded-[5px] pt-[16px] pb-[16px] pl-[24px] flex flex-col items-start gap-[8px]"
              >
                <button className="leading-[16px] text-[12px]">Africa</button>
                <button className="leading-[16px] text-[12px]">America</button>
                <button className="leading-[16px] text-[12px]">Asia</button>
                <button className="leading-[16px] text-[12px]">Oceania</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
