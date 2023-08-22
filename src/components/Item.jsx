import React, { useState } from "react";
import backImg from "../assets/imgs/watch-black.png";
import heart from "../assets/imgs/heart-rate-icon.png";
import "./Item.scss";
export const Item = () => {
  const buttons = [
    {
      color: "#23211f",
      imgSrc: "https://i.imgur.com/iOeUBV7.png",
    },
    {
      color: "#565681",
      imgSrc: "https://i.imgur.com/Mplj1YR.png",
    },
    {
      color: "#8a5362",
      imgSrc: "https://i.imgur.com/xSIK4M8.png",
    },
    {
      color: "#ca3d22",
      imgSrc: "https://i.imgur.com/PTgQlim.png",
    },
    {
      color: "#e9c7be",
      imgSrc: "https://i.imgur.com/Zygu7I3.png",
    },
  ];
  const [watchImg, setWatchImg] = useState(
    localStorage.getItem("watchImg") || backImg
  );
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const [active, setActive] = useState(false);

  function updateTime() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(() => {
    updateTime();
  }, 1000);

  function handleImgChange(img) {
    localStorage.setItem("watchImg", img);
    setWatchImg(img);
  }

  return (
    <div className="item">
      <div className="watch-img">
        <img className="watchImg" src={watchImg} alt="watch" />
        <div style={{ display: active ? "none" : "block" }} className="timer">
          {currentTime}
        </div>
        <div
          style={{ display: active ? "flex" : "none" }}
          className="heart-rate"
        >
          <img className="heartImg" src={heart} alt="heart" />
          <p>78</p>
        </div>
      </div>

      <div className="info-sect">
        <h1 className="watch-name">FitBit 19 - The Smartest Watch</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <h2>Select Color</h2>
        <div className="buttons">
          {buttons.map((e, i) => {
            return (
              <div
                key={i}
                style={{ background: e.color }}
                onClick={() => handleImgChange(e.imgSrc)}
                className="btns"
              ></div>
            );
          })}
        </div>
        <h2>Features</h2>
        <div className="buttons">
          <button onClick={() => setActive(false)}>Time</button>
          <button onClick={() => setActive(true)}>Heart Rate</button>
        </div>
        <button className="buy-btn">BUY NOW</button>
      </div>
    </div>
  );
};
