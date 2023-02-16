import { useState } from "react";

export default function Modal({
  name,
  modalVi,
  setmodalVi,
  searched,
  id,
  photo,
  typesA,
  typesB,
  colorMap,
  infoWeight,
  infoHeight,
  like,
  setLike,
  getLike,
}) {
  const onCloseHandler = () => {
    setmodalVi("");
  };

  return (
    <>
      <div
        className="modals"
        style={modalVi === id ? { display: "block" } : { display: "none" }}
        onClick={onCloseHandler}
      ></div>
      <div
        className="modal_item"
        style={modalVi === id ? { display: "block" } : { display: "none" }}
      >
        <div className="blackLine"></div>
        <div className="redLine"></div>
        <div className="modal_content">
          <ul>
            <li className="modal_left_textBox">
              <div className="modal_id"> {id < 10 ? `0${id}` : `${id}`} </div>
              <span>{name.toUpperCase()}</span>

              <p>
                Lorem Ipsum is simply dummy text of the printing <br />
                and typesetting industry. Lorem Ipsum has been
              </p>
              <div className="modal_types">
                <div
                  className="modal_type1"
                  style={{
                    backgroundColor: colorMap[typesA] || "",
                  }}
                >
                  {typesA}
                </div>
                <div
                  className="modal_type2"
                  style={{
                    backgroundColor: colorMap[typesB] || "",
                  }}
                >
                  {typesB}
                </div>
                <div className="modal_info">
                  <span>{(infoWeight / 10).toFixed(1)}kg</span>
                  <span>{(infoHeight / 10).toFixed(1)}m</span>
                </div>
              </div>
            </li>
            <li className="modal_right_img">
              <div>
                <img src={photo}></img>
              </div>
            </li>
          </ul>
          <span className="modal_like">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                onClick={() => {
                  getLike(id);
                }}
                id="likeicon"
                d="M7.43422 2.34595L7.04836 3.02183L6.59404 2.38993C5.92649 1.46147 5.21166 0.943459 4.54251 0.719436C3.87806 0.49699 3.22556 0.552381 2.64236 0.827748C1.46621 1.38309 0.499999 2.88492 0.499999 4.96213C0.499999 7.01329 1.31328 8.33969 2.55014 9.4408C3.17937 10.001 3.91887 10.5025 4.72876 11.009C5.03797 11.2024 5.36297 11.3997 5.69509 11.6014C6.12312 11.8613 6.56298 12.1284 6.99614 12.4035C7.49266 12.0794 7.99204 11.7719 8.47402 11.475C8.75212 11.3037 9.02443 11.136 9.28704 10.9707C10.1005 10.4589 10.839 9.96006 11.4661 9.40516C12.6967 8.31624 13.5 7.01346 13.5 4.96213C13.5 2.90797 12.4311 1.34615 11.178 0.759102C10.5573 0.468329 9.89303 0.414059 9.26276 0.638398C8.63105 0.86325 7.98173 1.38694 7.43422 2.34595Z"
                fill={like.find((res) => res.id === id) ? "#d8292c" : "#D4D2D2"}
                stroke="black"
              />
            </svg>
            <span
              onClick={() => {
                getLike(id);
              }}
            >
              LIKE
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
