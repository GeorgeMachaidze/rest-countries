import { useState } from "react";
import moon from "./assets/images/moon.png";
import moonDark from "./assets/images/moon-dark.png";

function App() {
  const [isDark, setIsDark] = useState(false);
  const handleToggle = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: isDark ? "#202C36" : "#FAFAFA",
          color: isDark ? "white" : "#111517",
        }}
      >
        <div
          style={{ backgroundColor: isDark ? "#2B3844" : "#FAFAFA" }}
          className="pt-[30px] pl-[16px] pb-[30px] pr-[16px] flex justify-between shadow-md"
        >
          <h1 className="text-[14px] font-extrabold leading-5 font-nunito-sans leading-normal">
            Where in the world?
          </h1>
          <div className="flex justify-center items-center gap-[8px]">
            <img
              onClick={handleToggle}
              className="w-[16px] h-[16px]"
              src={isDark ? moonDark : moon}
              alt=""
            />
            <h1 className="text-[12px] font-nunito-sans font-semibold">
              Dark Mode
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
