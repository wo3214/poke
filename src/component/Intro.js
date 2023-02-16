import introLine from "../img/introLine.png";
import introB from "../img/introbottom.png";
import introArrow from "../img/introarrow.png";
import introLogo from "../img/introLogo.png";

export default function Intro({ introOpen }) {
  return (
    <>
      <div className="intro_box">
        <div className="intro_logo">
          <img src={introLogo} />
        </div>
        <div className="intro_line">
          <img src={introLine} />
          <div className="intro_here">
            <img src={introArrow} />
            <span>Click</span>
          </div>
          <div className="intro_button" onClick={introOpen}></div>
        </div>
      </div>

      <div className="intro_bottom">
        <img src={introB} />
        <span> PokeMon Encyclopedia Web</span>
      </div>
    </>
  );
}
