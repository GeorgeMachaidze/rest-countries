import backArrow from "./assets/images/back-arrow.svg";
import backArrowWhite from "./assets/images/back-arrow-white.svg";

function Country({ searchData, isDark }) {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="mr-[28px] ml-[28px] pb-[60px] lg:flex lg:h-screen">
      <div className="lg:ml-[80px]">
        <button
          style={{ backgroundColor: isDark ? "#2B3844" : "#FAFAFA" }}
          onClick={handleClick}
          className="flex items-center gap-[8px] mt-[40px]  shadow-md pl-[24px] pr-[24px] pt-[6px] pb-[6px] pointer"
        >
          <img src={isDark ? backArrowWhite : backArrow} alt="" />
          Back
        </button>
        <div>
          <img
            className="rounded-[5px] mt-[64px] lg:w-[559px] lg:h-[450px] lg:mt-[90px]"
            src={searchData && searchData[0]?.flags.png}
            alt=""
          />
        </div>
      </div>
      <div className="lg:ml-[120px] lg:mt-[200px] lg:flex lg:flex:wrap">
        <div className="mt-[40px] lg:mt-0">
          <h1 className="text-22px font-extrabold lg:text-[32px]">
            {searchData && searchData[0]?.name.common}
          </h1>
          {searchData[0].name.common.length > 0 && (
            <h1 className="text-[14px] mt-[16px] font-bold">
              Native Name:{" "}
              <span className="font-light text-[12px]">
                {searchData[0].name.common}
              </span>
            </h1>
          )}
          <h1 className="text-[14px] mt-[16px] font-bold">
            Population:{" "}
            <span className="font-light text-[12px]">
              {searchData && searchData[0]?.population.toLocaleString("en-US")}
            </span>
          </h1>
          <h1 className="text-[14px] mt-[16px] font-bold">
            Region:{" "}
            <span className="font-light text-[12px]">
              {searchData && searchData[0]?.region}
            </span>
          </h1>
          <h1 className="text-[14px] mt-[16px] font-bold">
            Sub Region:{" "}
            <span className="font-light text-[12px]">
              {searchData && searchData[0]?.subregion}
            </span>
          </h1>
          <h1 className="text-[14px] mt-[16px] font-bold">
            Capital:{" "}
            <span className="font-light text-[12px]">
              {searchData && searchData[0]?.capital}
            </span>
          </h1>
        </div>
        <div className="mt-[32px] lg:ml-[140px] lg:mr-[82px]">
          <h1 className="text-[14px] mt-[16px] font-bold">
            Top Level Domain:{" "}
            <span className="font-light text-[12px]">
              {searchData && searchData[0]?.tld}
            </span>
          </h1>
          {searchData[0].currencies.length > 0 && (
            <h1 className="text-[14px] mt-[16px] font-bold">
              Currencies:{" "}
              <span className="font-light text-[12px]">
                {searchData[0].currencies}
              </span>
            </h1>
          )}
          <h1 className="text-[14px] mt-[16px] font-bold">
            Languages:{" "}
            {Object.values(searchData[0].languages).map((language, index) => (
              <span key={index} className="font-light text-[12px]">
                {language}
                {","}
              </span>
            ))}
          </h1>
        </div>
        <div className="mt-[32px] lg:mt-[-20%] lg:ml-[-550px] lg:flex lg:items-center">
          <h1 className="text-[16px] font-semibold leading-[24px]">
            Border Countries:
          </h1>
          <div className="flex gap-[10px] mt-[16px] lg:mt-0 lg:ml-[43px] ">
            {searchData[0].borders.map((country, index) => (
              <button
                style={{ backgroundColor: isDark ? "#2B3844" : "#FAFAFA" }}
                className="text-[12px] rounded-2px shadow-md p-[3px]"
                key={index}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Country;
