import { Component, useState } from "react";
import seachicon from "../img/seachicon.svg";
import Modal from "./Modal";
import Order from "./Order";
import PageBtn from "./PageBtn";
import TypeBox from "./TypeBox";

export default function Home({
  searched,
  pageOffset,
  itemCount,
  getType,
  getValue,
  useInput,
  page,
  numPage,
  setPage,
  getOrder,
  typeShow,
  typeBtn,
  like,
  setLike,
  colorMap,
  getLike,
}) {
  const [modalVi, setmodalVi] = useState("");

  const onModalHandler = (id) => {
    setmodalVi(id);
  };

  return (
    <div className="items">
      <div className="items_head_box">
        <h2>PokeMon Encyclopedia Web</h2>
        <div className="search_box">
          <input placeholder="Name" onChange={getValue}></input>
          <div>
            <img src={seachicon}></img>
          </div>
        </div>
      </div>
      <ul className="item_list">
        {searched
          .filter((item) => item.name.toLowerCase().includes(useInput))
          .slice(pageOffset, pageOffset + itemCount)
          .map((res) => {
            return (
              <li
                key={res.id}
                onClick={() => {
                  onModalHandler(res.id);
                }}
              >
                <div>{res.id}</div>
                <img src={res.sprites.other.dream_world.front_default}></img>
                <section className="text_box">
                  <h3>{res.name}</h3>
                  <div
                    className="elo"
                    style={{
                      backgroundColor: colorMap[res.types[0].type.name] || "",
                    }}
                  >
                    {res.types[0].type.name}
                  </div>
                  <div
                    className={res.types[1] ? "elo" : ""}
                    style={{
                      backgroundColor:
                        colorMap[res.types[1] && res.types[1].type.name] || "",
                    }}
                  >
                    {res.types[1] && res.types[1].type.name}
                  </div>
                </section>
              </li>
            );
          })}
      </ul>

      <TypeBox getType={getType} typeShow={typeShow} typeBtn={typeBtn} />

      {searched.map((res) => (
        <Modal
          key={res.id}
          id={res.id}
          name={res.name}
          typesA={res.types[0].type.name}
          typesB={res.types[1] && res.types[1].type.name}
          infoWeight={res.weight}
          infoHeight={res.height}
          modalVi={modalVi}
          setmodalVi={setmodalVi}
          searched={searched}
          photo={res.sprites.other.dream_world.front_default}
          colorMap={colorMap}
          like={like}
          setLike={setLike}
          getLike={getLike}
        />
      ))}

      <div className="foot_box">
        <PageBtn setPage={setPage} numPage={numPage} page={page} />
        <Order getOrder={getOrder} />
      </div>
    </div>
  );
}
