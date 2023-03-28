type CheckboxType = {
  // key?: string;
  name: string;
  label: string;
  type: string;
  changeParam: any;
};

const Checkbox = ({ key, name, label, changeParam, type }: CheckboxType) => {
  return (
    <label
      htmlFor={label + "-" + name}
      className={`checkbox ${type ? "checkbox--" + type : ""}`}
    >
      <input
        name={name}
        type="radio"
        id={label + "-" + name}
        onClick={() => changeParam(name === "product-size" ? label : type)}
      />
      <span className="checkbox__check"></span>
      <p>{label}</p>
    </label>
  );
};

export default Checkbox;
