// import "./App.css";
import Radar from "./components/radar/Radar2";
import seaImage from "./sea.jpg";
import mapImage from "./eu_outline.png";
import map1 from "./map1.jpg";
import React, { useState } from "react";
import ImageMagnifier from "./components/ImageMagnifier.js";
// import { languageOptions } from "./languages";
import { Text } from "./components/containers/Language";
import { LanguageProvider } from "./components/containers/Language";
import LanguageSelector from "./components/containers/LanguageSelector";
import useSound from "use-sound";
import seaSfx from "./sea.wav";
import { ReactComponent as KLPLogo } from "./logo.svg";

// TODO: SUZIURET SU RADARO RESPONSABILITY
// TODO: FIX MOBILE
// TODO: UPDATE LOGO
// TODO: jump to content on click
function App() {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  // const [language, setLanguage] = useState("EN");

  const backgroundImageStyle = {
    backgroundImage: `url("${seaImage}")`,
    backgroundSize: "cover",
  };

  const backgroundMAPImageStyle = {
    backgroundImage: `url("${mapImage}")`,
    // maxWidth: "100%",
    // height: "auto",
    // backgroundSize: "auto 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "780px",
    width:"980px",
    
  };

  const setModal = (image, title) => {
    setImage(image);
    setModalTitle(title);
    setShowModal(true);
  };

  const playSound = () => {
    if (isSoundPlaying) {
      stop();
      setIsSoundPlaying(false);
    } else {
      play();
      setIsSoundPlaying(true);
    }
  };

  // const { dictionary } = useContext(LanguageContext);
  const [play, { stop }] = useSound(seaSfx, { volume: 0.08 });
  return (
    <LanguageProvider>
      <div className="App font-mono bg-[#f4faf8]">
        <nav
          class="sticky top-0 py-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(32,66,192,0.9) 10%, rgba(9,9,121,0) 90%)",
            zIndex: "100",
            position: "fixed",
            width: "100%",
          }}
        >
          <div className="w-full grid grid-cols-3">
            <div className="w-full">
              <div className="w-12 pl-16">
                <KLPLogo />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button class="bg-transparent p-1 m-6 border border-[#faf2d7] hover:border-[#f7e8b5]  rounded-full">
                <button
                  onClick={() => playSound()}
                  class="bg-[#faf2d7] hover:bg-[#f7e8b5] text-[#2042c0] py-2 px-8 rounded-full"
                >
                  <Text tid="listenButton" />
                  {isSoundPlaying ? " ◼" : " ▶"}
                </button>
              </button>
            </div>
            <div className="w-full  flex justify-end">
              <div className="grid grid-cols-2  m-6">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </nav>

        <div className=" text-white " style={backgroundImageStyle}>
          <div
            className="pl-20 py-6"
            style={{
              height: "800px",
            }}
          ></div>
        </div>

        <div className="p-12 text-white bg-[#faf2d7] grid grid-cols-5">
          <div className="mb-4 py-4 px-24 col-span-4 text-[#1533d0]">
            <div>
              <h1 className="text-7xl font-lightleading-normal ">
                <Text className=" tracking-tighter " tid="mainTitle" />
                <span className="text-sm">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </div>
                </span>
              </h1>
            </div>
          </div>
          <div className="py-4 px-24">
            <svg
              width="16"
              height="162"
              viewBox="0 0 16 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.2929 161.707C7.68342 162.098 8.31659 162.098 8.70711 161.707L15.0711 155.343C15.4616 154.953 15.4616 154.319 15.0711 153.929C14.6806 153.538 14.0474 153.538 13.6569 153.929L8.00001 159.586L2.34315 153.929C1.95263 153.538 1.31946 153.538 0.928939 153.929C0.538415 154.319 0.538415 154.953 0.928939 155.343L7.2929 161.707ZM7 4.37114e-08L7.00001 161L9.00001 161L9 -4.37114e-08L7 4.37114e-08Z"
                fill="#1533D0"
              />
            </svg>
          </div>
        </div>

        <div className="">
          <div className="flex justify-end">
            <div className="py-16 mr-24">
              <div className="pt-16 flex justify-center">
                <Radar />
              </div>
            </div>
            
            <div
              className="text-white "
              style={backgroundMAPImageStyle}
            >
              {/* <div
                style={{
                  opacity: "100%",
                  border: "10px solid #2042c0",
                  borderRadius: "100%",
                  position: "absolute",
                  width: "0px",
                  float: "left",
                  top: "0",
                  left: "0",
                }}
              ></div> */}
            </div>
          </div>
        </div>

        {/* <div className="">
          <div className="grid grid-cols-5 text-slate-600">
            <div className="px-24 py-16 col-span-3">
              <div className="max-w-md mb-4">
                <h3 className="text-3xl">
                  <Text tid="mainTitle" />
                </h3>
              </div>

              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="pt-16 flex justify-center">
                <Radar />
              </div>
            </div>

            <div
              className=" text-white relative col-span-2"
              style={backgroundMAPImageStyle}
            >
            </div>
          </div>
        </div> */}

        <div className="px-24 py-16">
          <div className="grid grid-cols-4 gap-4 text-slate-600">
            <div className="flex justify-center">
              <button
                // onClick={() => playSound()}
                class=" border border-[#1533d0] hover:border-[#1533d0] bg-[#faf2d7] hover:bg-[#f7e8b5] text-[#2042c0] py-2 px-8 rounded-full"
              >
                <Text tid="firstButton" />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                // onClick={() => playSound()}
                class=" border border-[#1533d0] hover:border-[#1533d0] bg-[#faf2d7] hover:bg-[#f7e8b5] text-[#2042c0] py-2 px-8 rounded-full"
              >
                <Text tid="secondButton" />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                // onClick={() => playSound()}
                class=" border border-[#1533d0] hover:border-[#1533d0] bg-[#faf2d7] hover:bg-[#f7e8b5] text-[#2042c0] py-2 px-8 rounded-full"
              >
                <Text tid="thirdButton" />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                // onClick={() => playSound()}
                class=" border border-[#1533d0] hover:border-[#1533d0] bg-[#faf2d7] hover:bg-[#f7e8b5] text-[#2042c0] py-2 px-8 rounded-full"
              >
                <Text tid="forthButton" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-24 py-16">
          <div className="grid grid-cols-2 gap-4 text-slate-600">
            <div>
              <h3 className="text-2xl font-bold mb-2">Share what you love</h3>
              <p className="text-lg">
                Indulge your love for design when you host Airbnb guests, who
                are drawn to authentic travel in creatively curated spaces.
              </p>
            </div>

            <div className="flex justify-end">
              <img
                className="cursor-pointer"
                src={map1}
                alt="map 1"
                onClick={() => setModal(map1, "test")}
              />
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#f4faf8] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <span className="mt-2">{modalTitle.toUpperCase()}</span>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  {/* <img className="cursor-pointer" src={image} alt="map 1" /> */}
                  <ImageMagnifier src={image} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </LanguageProvider>
  );
}

export default App;
