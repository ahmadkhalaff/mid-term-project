
function InputField({ placeholder, value, onChange, label, type, editable }) {
  return (
    <div>
      <label
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          color: "#374151",
          marginBottom: "8px",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        disabled={!editable}
        id={type}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        className="_input_field"
      />
    </div>
  );
}

export default InputField
