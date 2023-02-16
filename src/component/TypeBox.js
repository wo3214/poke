export default function TypeBox({ getType, typeShow, typeBtn }) {
  return (
    <div className={typeShow ? "type_open" : "type_box"}>
      <h3>TYPE</h3>
      <ul>
        <li>
          <button
            value="normal"
            style={{ backgroundColor: "#34332C" }}
            onClick={(e) => getType(e.target.value)}
          >
            노말
          </button>
        </li>
        <li>
          <button
            value="fire"
            style={{ backgroundColor: "#DD570C" }}
            onClick={(e) => getType(e.target.value)}
          >
            불꽃
          </button>
        </li>
        <li>
          <button
            value="fighting"
            style={{ backgroundColor: "#C00000" }}
            onClick={(e) => getType(e.target.value)}
          >
            격투
          </button>
        </li>
        <li>
          <button
            value="electric"
            style={{ backgroundColor: "#FFD622" }}
            onClick={(e) => getType(e.target.value)}
          >
            전기
          </button>
        </li>
        <li>
          <button
            value="water"
            style={{ backgroundColor: "#2622FF" }}
            onClick={(e) => getType(e.target.value)}
          >
            물
          </button>
        </li>
        <li>
          <button
            value="grass"
            style={{ backgroundColor: "#6CE987" }}
            onClick={(e) => getType(e.target.value)}
          >
            풀
          </button>
        </li>
        <li>
          <button
            value="poison"
            style={{ backgroundColor: "#64316C" }}
            onClick={(e) => getType(e.target.value)}
          >
            독
          </button>
        </li>
        <li>
          <button
            value="ice"
            style={{ backgroundColor: "#5BD7F2" }}
            onClick={(e) => getType(e.target.value)}
          >
            얼음
          </button>
        </li>
        <li>
          <button
            value="ground"
            style={{ backgroundColor: "#E0C068" }}
            onClick={(e) => getType(e.target.value)}
          >
            땅
          </button>
        </li>
        <li>
          <button
            value="flying"
            style={{ backgroundColor: "#3B4F95" }}
            onClick={(e) => getType(e.target.value)}
          >
            비행
          </button>
        </li>
        <li>
          <button
            value="psychic"
            style={{ backgroundColor: "#FF50D8" }}
            onClick={(e) => getType(e.target.value)}
          >
            에스퍼
          </button>
        </li>
        <li>
          <button
            value="bug"
            style={{ backgroundColor: "#1F632E" }}
            onClick={(e) => getType(e.target.value)}
          >
            벌레
          </button>
        </li>
        <li>
          <button
            value="ghost"
            style={{ backgroundColor: "#331238" }}
            onClick={(e) => getType(e.target.value)}
          >
            고스트
          </button>
        </li>
        <li>
          <button
            value="rock"
            style={{ backgroundColor: "#685100" }}
            onClick={(e) => getType(e.target.value)}
          >
            바위
          </button>
        </li>
        <li>
          <button
            value="dragon"
            style={{ backgroundColor: "#4B6E87" }}
            onClick={(e) => getType(e.target.value)}
          >
            드래곤
          </button>
        </li>
        <li>
          <button
            value="fairy"
            style={{ backgroundColor: "#E1A2A2" }}
            onClick={(e) => getType(e.target.value)}
          >
            요정
          </button>
        </li>
      </ul>
      <h4 onClick={typeBtn}>close</h4>
    </div>
  );
}
