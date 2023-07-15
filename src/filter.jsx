import { useState, useEffect } from "react";
import axios from "axios";

function Filter({ region, isDark, setInputValue, getSearchData }) {
  const [filterData, setFilterData] = useState("");

  const getFilterData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setFilterData(response.data);
    } catch (error) {
      setFilterData("");
    }
  };

  useEffect(() => {
    getFilterData();
  }, []);

  const handleClick = (thisName) => () => {
    setInputValue(thisName);
    getSearchData();
  };
  return (
    <>
      {Object.keys(filterData).length > 0 ? (
        Object.keys(filterData).map((key) => {
          const item = filterData[key];

          return (
            <div
              key={key}
              className="flex flex-col items-center gap-[25px] justify-center mt-[32px] pb-[65px]"
            >
              <div
                key={key}
                onClick={handleClick(item && item.name.common)}
                className="pb-[48px] rounded-[5px] shadow-md cursor-pointer"
                style={{ backgroundColor: isDark ? "#2B3844" : "#fff" }}
              >
                <img
                  className="w-[267px] h-[160px] rounded-[5px]"
                  src={item && item.flags.png}
                  alt="country image"
                />
                <div className="ml-[24px]">
                  <h1 className="font-extrabold text-[18px] leading-[25px] mt-[24px] mb-[16px]">
                    {item && item.name.common}
                  </h1>
                  <h1 className="text-[14px] font-semibold leading-[16px]">
                    Population:{" "}
                    <span className="text-[14px] font-light ">
                      {item && item.population.toLocaleString("en-US")}
                    </span>
                  </h1>
                  <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
                    Region:{" "}
                    <span className="text-[14px] font-light ">
                      {item && item.region}
                    </span>
                  </h1>
                  <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
                    Capital:{" "}
                    <span className="text-[14px] font-light ">
                      {item && item.capital}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
}

export default Filter;
