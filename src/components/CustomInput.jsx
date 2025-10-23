import "../../styles/custom-input.css";

export function CustomInput({ id, placeholder, type }) {
  return (
    <div className="custom-input">
      <input type={type} id={id} required />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
}
