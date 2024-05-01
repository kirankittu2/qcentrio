export default function Button({ name, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {name}
    </button>
  );
}
