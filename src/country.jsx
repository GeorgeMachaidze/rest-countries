import backArrow from "./assets/images/back-arrow.svg";

function Country({ searchData }) {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="mr-[28px] ml-[28px]">
      <div>
        <button
          onClick={handleClick}
          className="flex items-center gap-[8px] mt-[40px] bg-#FFF shadow-md pl-[24px] pr-[24px] pt-[6px] pb-[6px]"
        >
          <img src={backArrow} alt="" />
          Back
        </button>
        <div>
          <img
            className="rounded-[5px] mt-[64px]"
            src={searchData && searchData[0]?.flags.png}
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="mt-[40px]">
          <h1 className="text-22px font-extrabold">
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
        <div className="mt-[32px]">
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
      </div>
    </div>
  );
}
export default Country;
