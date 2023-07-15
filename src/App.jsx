import { useState } from "react";
import axios from "axios";
import Header from "./header";
import Content from "./content";
import Country from "./country";
import SearchBar from "./search";
import Filter from "./filter";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState("");
  const [showCountry, setShowCountry] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [region, setRegion] = useState("");

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  const getSearchData = async () => {
    if (inputValue === "") {
      setShowCountry(false);
    } else {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${inputValue}?fullText=true`
        );
        setSearchData(response.data);
        setShowCountry(true);
        setShowSearchBar(false);
      } catch (error) {
        setSearchData("");
        console.log("error");
      }
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: isDark ? "#202C36" : "#FAFAFA",
          color: isDark ? "white" : "#111517",
        }}
        className="font-nunito-sans"
      >
        <Header isDark={isDark} handleToggle={handleToggle} />

        {showSearchBar && (
          <SearchBar
            isDark={isDark}
            getSearchData={getSearchData}
            inputValue={inputValue}
            setInputValue={setInputValue}
            region={region}
            setRegion={setRegion}
          />
        )}

        {showCountry ? (
          <Country searchData={searchData} isDark={isDark} />
        ) : (
          <>
            {!region && (
              <Content
                isDark={isDark}
                getSearchData={getSearchData}
                setInputValue={setInputValue}
              />
            )}
            {region && (
              <Filter
                region={region}
                isDark={isDark}
                setInputValue={setInputValue}
                getSearchData={getSearchData}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
