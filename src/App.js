import "./style.css";
import logo from "./img/logo.png";
import { useState, useEffect, useRef } from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import axios, { all } from "axios";
import Home from "./component/Home";
import Intro from "./component/Intro";
import Like from "./component/Like";

function App() {
  const [poData, setpoData] = useState([]); /* 포켓몬 기본 데이터 배열 */
  const [searched, setSear] = useState([]); /* 포켓몬 type 배열 */
  const [itemCount, setitemCount] = useState(15); /* 표시할 아이템 수 */
  const [page, setPage] = useState(1); /* 페이지 */
  const pageOffset = (page - 1) * itemCount; /* 페이지 오프셋  */
  const [like, setLike] = useState([]); /* 좋아요 배열 */
  const [typeShow, setShow] = useState(false); /* type 토글 */

  const [useInput, setInput] = useState(""); /* 검색 input value */
  const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151/";

  const numPage = Math.ceil(
    searched.filter((item) => item.name.toLowerCase().includes(useInput))
      .length / itemCount
  ); /* 페이지 버튼 수 */

  const getValue = (e) => {
    setInput(e.target.value.toLowerCase());
  }; /* 검색 input Value 값 */

  const pokeApi = async () => {
    let data = await axios.get(baseUrl);
    getData(data.data.results);
  }; /* 포켓몬 api 기본 */

  function getData(res) {
    res.map(async (gep) => {
      const gel = await axios.get(gep.url);
      setpoData((state) => {
        state = [...state, gel.data];
        return state.sort((a, b) => {
          return a.id - b.id;
        });
      });
    });
  } /* 포켓몬 api 상세정보 */

  function getType(res) {
    if (res == "전체") {
      setSear(poData);
    } else {
      setSear(
        poData.filter(
          (a) =>
            a.types.length > 0 &&
            (a.types[0].type.name === res ||
              (a.types.length > 1 && a.types[1].type.name === res))
        )
      );
    }
  } /* 타입 */

  function getOrder(res) {
    setSear((state) => {
      return [...state].sort((a, b) => {
        if (res == "기본") {
          return a.id - b.id;
        } else if (res == "아이디높") {
          return b.id - a.id;
        } else if (res == "크기낮") {
          return a.height - b.height;
        } else if (res == "크기높") {
          return b.height - a.height;
        } else if (res == "무게낮") {
          return a.weight - b.weight;
        } else if (res == "무게높") {
          return b.weight - a.weight;
        }
      });
    });
    setLike((state) => {
      return [...state].sort((a, b) => {
        if (res == "기본") {
          return a.id - b.id;
        } else if (res == "아이디높") {
          return b.id - a.id;
        } else if (res == "크기낮") {
          return a.height - b.height;
        } else if (res == "크기높") {
          return b.height - a.height;
        } else if (res == "무게낮") {
          return a.weight - b.weight;
        } else if (res == "무게높") {
          return b.weight - a.weight;
        }
      });
    });
  } /* 정렬 */

  function allBtn() {
    setSear(poData);
    setShow(false);
  } /* all 홈 */

  const typeBtn = () => {
    setShow(!typeShow);
  }; /* type 토글 */

  function introOpen() {
    const introBox = document.querySelector(".intro_box");
    const introBottom = document.querySelector(".intro_bottom");
    const introButton = document.querySelector(".intro_button");
    introBox.classList.add("intro_box_open");
    introBottom.classList.add("intro_bottom_open");
    introButton.classList.add("intro_button_open");
    setSear(poData);
  } /* intro 오픈 */

  function introClose() {
    const introBox = document.querySelector(".intro_box");
    const introBottom = document.querySelector(".intro_bottom");
    const introButton = document.querySelector(".intro_button");
    introBox.classList.remove("intro_box_open");
    introBottom.classList.remove("intro_bottom_open");
    introButton.classList.remove("intro_button_open");
  } /* intro 클로즈 */

  const getLike = (id) => {
    let ids = searched.find((res) => res.id === id);
    let newLike = [...like];
    if (newLike.includes(ids)) {
      newLike = newLike.filter((item) => item !== ids);
    } else {
      newLike.push(ids);
    }
    setLike(newLike);
  }; /* 좋아요 추가/삭제 */

  const clearLike = () => {
    setLike([]);
  }; /* 좋아요 전부삭제 */

  const colorMap = {
    fire: "#DD570C",
    water: "#2622FF",
    ice: "#5BD7F2",
    normal: "#34332C",
    fighting: "#C00000",
    electric: "#FFD622",
    grass: "#6CE987",
    poison: "#64316C",
    ground: "#E0C068",
    flying: "#3B4F95",
    psychic: "#FF50D8",
    bug: "#1F632E",
    ghost: "#331238",
    rock: "#685100",
    dragon: "#4B6E87",
    steel: "#727272",
    fairy: "#E1A2A2",
  }; /* 컬러맵 */

  useEffect(() => {
    pokeApi();
    getOrder();
  }, []);

  return (
    <BrowserRouter>
      <article className="main">
        <div className="content_box">
          <div className="side_menu">
            <h1 className="logo" onClick={introClose}>
              <img src={logo} />
            </h1>
            <ul className="menu_list">
              <li>
                <Link to="/" onClick={allBtn}>
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={(e) => {
                    allBtn(e);
                    typeBtn(e);
                  }}
                >
                  <span>TYPE</span>
                </Link>
              </li>
              <li>
                <Link to="/like">LIKE</Link>
              </li>
            </ul>
          </div>
          <Intro introOpen={introOpen} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  getValue={getValue}
                  searched={searched}
                  pageOffset={pageOffset}
                  itemCount={itemCount}
                  getType={getType}
                  useInput={useInput}
                  page={page}
                  setPage={setPage}
                  numPage={numPage}
                  getOrder={getOrder}
                  typeShow={typeShow}
                  typeBtn={typeBtn}
                  like={like}
                  setLike={setLike}
                  colorMap={colorMap}
                  getLike={getLike}
                />
              }
            ></Route>
            <Route
              path="/like"
              element={
                <Like
                  like={like}
                  colorMap={colorMap}
                  getLike={getLike}
                  getValue={getValue}
                  useInput={useInput}
                  getOrder={getOrder}
                  clearLike={clearLike}
                />
              }
            />
          </Routes>
        </div>
      </article>
    </BrowserRouter>
  );
}

export default App;
