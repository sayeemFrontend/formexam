export default function Button({ title, onClicked }) {
  return (
    <button onClick={onClicked && onClicked} className="w-full h-full center">
      {title}
    </button>
  );
}
