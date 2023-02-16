export default function Order({ getOrder }) {
  return (
    <select
      className="select_box"
      onChange={(e) => {
        getOrder(e.target.value);
      }}
    >
      <option value="기본">= 기본 정렬 =</option>
      <option value="아이디높">아이디 ▲</option>
      <option value="무게낮">무게 ▼</option>
      <option value="무게높">무게 ▲</option>
      <option value="크기낮">크기 ▼</option>
      <option value="크기높">크기 ▲</option>
    </select>
  );
}
