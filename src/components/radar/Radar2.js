import React, { useState } from "react";
// import Dot from "./Dot";
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

      <div
        class="dot pos1"
        onMouseEnter={() => setIsShown1(true)}
        onMouseLeave={() => setIsShown1(false)}
      ></div>
      <div
        className="dotStroke pos1"
        onMouseEnter={() => setIsShown1(true)}
        onMouseLeave={() => setIsShown1(false)}
        style={{
          color: "#1F3EE3",
          position: "absolute",
          left: "95px",
          top: "375px",
        }}
      ></div>
      <div
        className="dotText pos1"
        style={{
          color: "#1F3EE3",
          position: "absolute",
          left: "105px",
          top: "404px",
        }}
      >
        1
      </div>
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
      <div
        className="dotStroke pos2"
        onMouseEnter={() => setIsShown2(true)}
        onMouseLeave={() => setIsShown2(false)}
        style={{
          color: "#1F3EE3",
          position: "absolute",
          left: "395px",
          top: "175px",
        }}
      ></div>
      <div
        className="dotText pos2"
        style={{
          color: "#1F3EE3",
          position: "absolute",
          left: "405px",
          top: "203px",
        }}
      >
        2
      </div>
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
      <div
        className="dotStroke pos3"
        onMouseEnter={() => setIsShown3(true)}
        onMouseLeave={() => setIsShown3(false)}
        style={{
          color: "#1F3EE3",
          position: "absolute",
          left: "95px",
          top: "75px",
        }}
      ></div>
      <div
        className="dotText pos3"
        style={{
          color: "#1F3EE3",
          position: "absolute",
          left: "105px",
          top: "103px",
        }}
      >
        3
      </div>
      {isShown3 && (
        <>
          <div
            style={{
              /* Ellipse 19 */
              opacity: "100%",
              border: "1px solid #032CFF",
              borderRadius: "100%",
              position: "absolute",
              width: "29px",
              height: "29px",
              left: "950px",
              top: "300px",
              boxSizing: "border-box",
              background: "rgba(21, 51, 208, 0.13)",
            }}
          ></div>
          <div
            style={{
              /* Arrow 2 */

              boxSizing: "border-box",

              position: "absolute",
              left: "766px",
              top: "314px",
              width: "200px",
              border: "1px solid #1F3EE3",
            }}
          ></div>
          <div
            style={{
              color: "#1F3EE3",
              position: "absolute",
              left: "765px",
              top: "292px",
            }}
          >
            PRANCŪZIJA
          </div>
        </>
      )}

      <div
        class="dot pos4"
        onMouseEnter={() => setIsShown4(true)}
        onMouseLeave={() => setIsShown4(false)}
      ></div>
      <div
        className="dotStroke pos4"
        onMouseEnter={() => setIsShown4(true)}
        onMouseLeave={() => setIsShown4(false)}
        style={{
          color: "#1F3EE3",
          position: "absolute",
          left: "495px",
          top: "395px",
        }}
      ></div>
      <div
        className="dotText pos4"
        style={{
          color: "#1F3EE3",
          position: "absolute",
          left: "505px",
          top: "423px",
        }}
      >
        4
      </div>
      {isShown4 && (
        <>
          <div
            style={{
              /* Ellipse 19 */
              opacity: "100%",
              border: "1px solid #032CFF",
              borderRadius: "100%",
              position: "absolute",
              width: "29px",
              height: "29px",
              left: "1252px",
              top: "85px",
              boxSizing: "border-box",
              background: "rgba(21, 51, 208, 0.13)",
            }}
          ></div>
          <div
            style={{
              /* Arrow 2 */

              boxSizing: "border-box",

              position: "absolute",
              left: "1066px",
              top: "99px",
              width: "200px",
              border: "1px solid #1F3EE3",
            }}
          ></div>
          <div
            style={{
              color: "#1F3EE3",
              position: "absolute",
              left: "1066px",
              top: "77px",
            }}
          >
            KLAIPĖDA
          </div>
          <div></div>
        </>
      )}
    </div>
  );
};

export default Radar;
