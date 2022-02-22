import "./TextArea.css";
export default function TextArea({ name, placeholder }) {
  return (
    <div className="textarea w-full">
      <textarea className="p-2 items-center w-full h-full bg-inherit focus-visible:outline-0" name={name && name} placeholder={placeholder && placeholder} />
    </div>
  );
}
