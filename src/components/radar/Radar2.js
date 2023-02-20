import React, { useState } from "react";
import Dot from "./Dot";
import "./radar2.css";

const Radar = () => {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);

  return (
    <div class="razar">
      <div class="ringbase ring1"></div>
      <div class="ringbase ring2"></div>
      <div className="stale-ringbase stale-ring1"></div>
      <div className="stale-ringbase stale-ring2"></div>
      <div className="stale-ringbase stale-ring3"></div>
      <div className="stale-ringbase stale-ring4"></div>
      <div className="stale-ringbase stale-ring5"></div>
      <div className="stale-ringbase stale-ring6"></div>
      <div className="line vertical " />
      <div className="line" />
      <div class="pulse"></div>
      <div class="pointer">
        <div></div>
      </div>

      {/* <div
        class="dot pos1"
        onMouseEnter={() => setIsShown1(true)}
        onMouseLeave={() => setIsShown1(false)}
      ></div>
      {isShown1 && (
        <div>
          <div></div>
          I'll appear when you hover over the button.
        </div>
      )}
      <div
        class="dot pos2"
        onMouseEnter={() => setIsShown2(true)}
        onMouseLeave={() => setIsShown2(false)}
      ></div>
      {isShown2 && (
        <div>
          <div></div>
          I'll appear when you hover over the button.
        </div>
      )}
      <div
        class="dot pos3"
        onMouseEnter={() => setIsShown3(true)}
        onMouseLeave={() => setIsShown3(false)}
      ></div>
      {isShown3 && (
        <div>
          I'll appear when you hover over the button.
          <div></div>
        </div>
      )} */}
      <div
        class="dot pos4"
        onMouseEnter={() => setIsShown4(true)}
        onMouseLeave={() => setIsShown4(false)}
      ></div>

      {isShown4 && (
        <div
          style={{
            left: "500px",
            top: "400px",
            position: "absolute",
          }}
        >
          I'll appear when you hover over the button.
        </div>
      )}
    </div>
  );
};

export default Radar;
