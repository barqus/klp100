import React, { useContext } from "react";

import { LanguageContext } from "../containers/Language";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e) => userLanguageChange(e);

  return (
    <>
      <button
        className={`px-4 mx-2 rounded-full 
                ${
                  userLanguage === "lt"
                    ? "text-[#2042c0] bg-[#faf2d7] hover:bg-[#f7e8b5]"
                    : "text-[#faf2d7] border border-[#faf2d7]"
                }`}
        onClick={() => handleLanguageChange("lt")}
      >
        LT
      </button>

      <button
        className={`px-4 mx-2 rounded-full 
              ${
                userLanguage === "en"
                  ? "text-[#2042c0] bg-[#faf2d7] hover:bg-[#f7e8b5]"
                  : "text-[#faf2d7] border border-[#faf2d7]"
              }`}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </button>
    </>
  );
}
