import React, { useState, useEffect } from "react";
import ImageMagnifier from "./ImageMagnifier.js";
import { Text } from "./containers/Language";

const Section = ({ image, title, description, imageDescription, layout }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const [showModal, setShowModal] = useState(false);
  //   const [image, setImage] = useState(null);

  //   const setModal = (image) => {
  //     // setImage(image);
  //     setShowModal(true);
  //   };

  return (
    <>
      <div className="px-24 py-16">
        <div className="grid grid-cols-2 gap-4 text-slate-600">
          {layout === "1" ? (
            <>
              <div className="flex justify-center">
                <img
                  className="cursor-pointer"
                  src={image}
                  alt="map 1"
                  onClick={() => setShowModal(true)}
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    <Text tid={title} />
                  </h3>
                  <p className="text-lg">
                    <Text tid={description} />
                  </p>
                </div>

                <div className="flex flex-row items-center justify-between">
                  <div className="w-2/5">
                    <div
                      style={{
                        border: "1px solid #6F805A",
                        transform: "rotate(-180deg)",
                      }}
                    ></div>
                  </div>
                  <div>
                    <Text tid={imageDescription} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    <Text tid={title} />
                  </h3>
                  <p className="text-lg">
                    <Text tid={description} />
                  </p>
                </div>

                <div className="flex flex-row items-center justify-between">
                  <div className="w-2/5">
                    <div
                      style={{
                        border: "1px solid #6F805A",
                        transform: "rotate(-180deg)",
                      }}
                    ></div>
                  </div>
                  <div>
                    <Text tid={imageDescription} />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  className="cursor-pointer"
                  src={image}
                  alt="map 1"
                  onClick={() => setShowModal(true)}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {showModal ? (
        <>
          <div
            style={{
              zIndex: "1000",
            }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="">
              {/*content*/}
              <div className="border-0 rounded-lg bg-[#f4faf8] text-2xl font-mono">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <span className="mt-2 text-[#2042c0] ">
                    <Text tid={title} />
                  </span>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-3xl bg-transparent text-[#2042c0] h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ✕
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="">
                  {/* <img className="cursor-pointer" src={image} alt="map 1" /> */}
                  <ImageMagnifier src={image} width="105vh" />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              zIndex: "900",
            }}
            className="opacity-50 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      ) : null}
    </>
  );
};

export default Section;
