export default function Todo({ text, id }) {
  return (
    <li
      id={id}
      style={{
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{text}</span>
      <button>delete</button>
    </li>
  );
}
