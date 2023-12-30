import React from "react";
import Img1 from "./imgs/img1.jpg";
import Img2 from "./imgs/img2.jpg";
import Img3 from "./imgs/img3.jpg";
import Img4 from "./imgs/img4.jpg";
import Img5 from "./imgs/img5.jpg";
import Img6 from "./imgs/img6.jpg";
import Img7 from "./imgs/img7.jpg";
import Img8 from "./imgs/img8.jpg";
import Img9 from "./imgs/img9.jpg";
import Img10 from "./imgs/img10.jpg";
import Img11 from "./imgs/img11.jpg";
import Img12 from "./imgs/img12.jpg";
import Img13 from "./imgs/img13.jpg";
import Img14 from "./imgs/img14.jpg";
import Img15 from "./imgs/img15.jpg";
import Img16 from "./imgs/img16.jpg";
import "./Gallery.css";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img16,
    },
  ];

  return (
    <div>
      <h1 className="heading">GLIMPSES OF INFINITUS'23</h1>
      <br></br>
      <div className="gallery">
        {data.map((item) => (
          <div className="pics" key={item.id}>
            <img src={item.imgSrc} style={{ width: "100%" }} alt="gallery" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
