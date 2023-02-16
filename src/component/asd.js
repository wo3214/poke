import React, { Component } from "react";
import Slider from "react-slick";

export default function Like({
  like,
  colorMap,
  getLike,
  useInput,
  getValue,
  getOrder,
  clearLike,
}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="like_page">
      <div className="like_head_box">
        <h2>Your Like</h2>
        <div className="like_search_box">
          <input placeholder="Name" onChange={getValue}></input>
          <div>
            <img src={seachicon}></img>
          </div>
        </div>
      </div>
      <span>{like.length} pokemon</span>
      <div className="like_head_line"></div>
      {like.length ? (
        <Slider {...settings}>
          {like
            .filter((item) => item.name.toLowerCase().includes(useInput))
            .map((res) => {
              return (
                <li key={res.id}>
                  <div
                    className="like_content_img"
                    style={{
                      backgroundColor: colorMap[res.types[0].type.name] || "",
                    }}
                  >
                    <img
                      src={res.sprites.other.dream_world.front_default}
                    ></img>
                  </div>
                  <div className="like_content_info">
                    <ul className="like_content_infoTop">
                      <li>
                        <h3>{res.name}</h3>
                        <span>{res.types[0].type.name}</span>
                        <span>{res.types[1] && res.types[1].type.name}</span>
                      </li>
                      <li>
                        <span>{(res.weight / 10).toFixed(1)}kg</span>
                        <span>{(res.height / 10).toFixed(1)}m</span>
                      </li>

                      <li>{res.id < 10 ? `0${res.id}` : `${res.id}`}</li>
                    </ul>
                    <ul className="like_content_infoBottom">
                      <li>
                        <span>pokemon encyclopedia</span>
                      </li>
                      <li onClick={() => getLike(res.id)}>
                        <img src={likeDel} />
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
        </Slider>
      ) : (
        <div className="noLike">
          <p>좋아하는 포켓몬을 추가하세요.</p>
        </div>
      )}
      <div className="like_foot_box">
        <div className="allBtn" onClick={clearLike}>
          All Delete
        </div>
        <Order getOrder={getOrder} />
      </div>
    </div>
  );
}
