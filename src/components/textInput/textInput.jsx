import "./textInput.css";
const TextInput = ({ label, type, value, setState }) => {
  return (
    <div className="textInput">
      <label htmlFor="">{label}</label>
      <input
        type={type ?? "text"}
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};
export default TextInput;
