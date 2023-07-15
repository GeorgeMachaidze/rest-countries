import { useState, useEffect } from "react";
import axios from "axios";

function Content({ isDark }) {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setData(response.data);
    } catch (error) {
      console.log("error");
      setData("");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center gap-[25px] justify-center mt-[32px] pb-[65px] ">
        <div
          className="pb-[48px] rounded-[5px] shadow-md"
          style={{ backgroundColor: isDark ? "#2B3844" : "#fff" }}
        >
          <img
            className="w-[267px] h-[160px] rounded-[5px]"
            src={data && data[227]?.flags.png}
            alt="country image"
          />
          <div className="ml-[24px]">
            <h1 className="font-extrabold text-[18px] leading-[25px] mt-[24px] mb-[16px]">
              {data && data[227]?.name.common}
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px]">
              Population:{" "}
              <span className="text-[14px] font-light ">
                {data && data[227]?.population.toLocaleString("en-US")}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Region:{" "}
              <span className="text-[14px] font-light ">
                {data && data[227]?.region}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Capital:{" "}
              <span className="text-[14px] font-light ">
                {data && data[227]?.capital}
              </span>
            </h1>
          </div>
        </div>
        <div
          className="pb-[48px] rounded-[5px] shadow-md"
          style={{ backgroundColor: isDark ? "#2B3844" : "#fff" }}
        >
          <img
            className="w-[267px] h-[160px] rounded-[5px]"
            src={data && data[224]?.flags.png}
            alt="country image"
          />
          <div className="ml-[24px]">
            <h1 className="font-extrabold text-[18px] leading-[25px] mt-[24px] mb-[16px]">
              {data && data[224]?.name.common}
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px]">
              Population:{" "}
              <span className="text-[14px] font-light ">
                {data && data[224]?.population.toLocaleString("en-US")}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Region:{" "}
              <span className="text-[14px] font-light ">
                {data && data[224]?.region}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Capital:{" "}
              <span className="text-[14px] font-light ">
                {data && data[224]?.capital}
              </span>
            </h1>
          </div>
        </div>
        <div
          className="pb-[48px] rounded-[5px] shadow-md"
          style={{ backgroundColor: isDark ? "#2B3844" : "#fff" }}
        >
          <img
            className="w-[267px] h-[160px] rounded-[5px]"
            src={data && data[64]?.flags.png}
            alt="country image"
          />
          <div className="ml-[24px]">
            <h1 className="font-extrabold text-[18px] leading-[25px] mt-[24px] mb-[16px]">
              {data && data[64]?.name.common}
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px]">
              Population:{" "}
              <span className="text-[14px] font-light ">
                {data && data[64]?.population.toLocaleString("en-US")}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Region:{" "}
              <span className="text-[14px] font-light ">
                {data && data[64]?.region}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Capital:{" "}
              <span className="text-[14px] font-light ">
                {data && data[64]?.capital}
              </span>
            </h1>
          </div>
        </div>
        <div
          className="pb-[48px] rounded-[5px] shadow-md"
          style={{ backgroundColor: isDark ? "#2B3844" : "#fff" }}
        >
          <img
            className="w-[267px] h-[160px] rounded-[5px]"
            src={data && data[94]?.flags.png}
            alt="country image"
          />
          <div className="ml-[24px]">
            <h1 className="font-extrabold text-[18px] leading-[25px] mt-[24px] mb-[16px]">
              {data && data[94]?.name.common}
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px]">
              Population:{" "}
              <span className="text-[14px] font-light ">
                {data && data[94]?.population.toLocaleString("en-US")}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Region:{" "}
              <span className="text-[14px] font-light ">
                {data && data[94]?.region}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Capital:{" "}
              <span className="text-[14px] font-light ">
                {data && data[94]?.capital}
              </span>
            </h1>
          </div>
        </div>
        <div
          className="pb-[48px] rounded-[5px] shadow-md"
          style={{ backgroundColor: isDark ? "#2B3844" : "#fff" }}
        >
          <img
            className="w-[267px] h-[160px] rounded-[5px]"
            src={data && data[35]?.flags.png}
            alt="country image"
          />
          <div className="ml-[24px]">
            <h1 className="font-extrabold text-[18px] leading-[25px] mt-[24px] mb-[16px]">
              {data && data[35]?.name.common}
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px]">
              Population:{" "}
              <span className="text-[14px] font-light ">
                {data && data[35]?.population.toLocaleString("en-US")}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Region:{" "}
              <span className="text-[14px] font-light ">
                {data && data[35]?.region}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Capital:{" "}
              <span className="text-[14px] font-light ">
                {data && data[35]?.capital}
              </span>
            </h1>
          </div>
        </div>
        <div
          className="pb-[48px] rounded-[5px] shadow-md"
          style={{ backgroundColor: isDark ? "#2B3844" : "#fff" }}
        >
          <img
            className="w-[267px] h-[160px] rounded-[5px]"
            src={data && data[193]?.flags.png}
            alt="country image"
          />
          <div className="ml-[24px]">
            <h1 className="font-extrabold text-[18px] leading-[25px] mt-[24px] mb-[16px]">
              {data && data[193]?.name.common}
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px]">
              Population:{" "}
              <span className="text-[14px] font-light ">
                {data && data[193]?.population.toLocaleString("en-US")}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Region:{" "}
              <span className="text-[14px] font-light ">
                {data && data[193]?.region}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Capital:{" "}
              <span className="text-[14px] font-light ">
                {data && data[193]?.capital}
              </span>
            </h1>
          </div>
        </div>
        <div
          className="pb-[48px] rounded-[5px] shadow-md"
          style={{ backgroundColor: isDark ? "#2B3844" : "#fff" }}
        >
          <img
            className="w-[267px] h-[160px] rounded-[5px]"
            src={data && data[232]?.flags.png}
            alt="country image"
          />
          <div className="ml-[24px]">
            <h1 className="font-extrabold text-[18px] leading-[25px] mt-[24px] mb-[16px]">
              {data && data[232]?.name.common}
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px]">
              Population:{" "}
              <span className="text-[14px] font-light ">
                {data && data[232]?.population.toLocaleString("en-US")}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Region:{" "}
              <span className="text-[14px] font-light ">
                {data && data[232]?.region}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Capital:{" "}
              <span className="text-[14px] font-light ">
                {data && data[232]?.capital}
              </span>
            </h1>
          </div>
        </div>
        <div
          className="pb-[48px] rounded-[5px] shadow-md"
          style={{ backgroundColor: isDark ? "#2B3844" : "#fff" }}
        >
          <img
            className="w-[267px] h-[160px] rounded-[5px]"
            src={data && data[187]?.flags.png}
            alt="country image"
          />
          <div className="ml-[24px]">
            <h1 className="font-extrabold text-[18px] leading-[25px] mt-[24px] mb-[16px]">
              {data && data[187]?.name.common}
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px]">
              Population:{" "}
              <span className="text-[14px] font-light ">
                {data && data[187]?.population.toLocaleString("en-US")}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Region:{" "}
              <span className="text-[14px] font-light ">
                {data && data[187]?.region}
              </span>
            </h1>
            <h1 className="text-[14px] font-semibold leading-[16px] mt-[8px]">
              Capital:{" "}
              <span className="text-[14px] font-light ">
                {data && data[187]?.capital}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
