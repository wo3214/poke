import arrowR from "../img/arrow-r.svg";
import arrowL from "../img/arrow-l.svg";

export default function PageBtn({ setPage, numPage, page, getOrder }) {
  return (
    <div className="pageBtn">
      <button
        className="arrowbtn"
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
        style={{ display: numPage < 1 ? "none" : "" }}
      >
        <img src={arrowL}></img>
      </button>
      {Array(numPage)
        .fill()
        .map((_, i) => {
          return (
            <button
              className="tebtn"
              key={i + 1}
              onClick={() => {
                setPage(i + 1);
              }}
              aria-current={page === i + 1 ? "tebtn" : null}
            >
              {i + 1}
            </button>
          );
        })}

      <button
        className="arrowbtn"
        onClick={() => {
          setPage(page + 1);
        }}
        style={{ display: numPage < 1 ? "none" : "" }}
        disabled={page === numPage}
      >
        <img src={arrowR}></img>
      </button>
    </div>
  );
}
