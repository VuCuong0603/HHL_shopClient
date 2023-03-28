type CheckboxColorType = {
  type?: string;
  name: string;
  color: string;
  valueName: string;
  changeParam?: any;
  label: string;
};

const CheckboxColor = ({
  color,
  name,
  type = "checkbox",
  changeParam,
  valueName,
  label,
}: CheckboxColorType) => {
  return (
    <label htmlFor={color + "-" + name} className={`checkbox-color`}>
      <input
        value={color}
        data-name={valueName}
        name={name}
        type={type}
        id={color + "-" + name}
        onClick={() => changeParam(name === "product-color" ? label : type)}
      />
      <span className="checkbox__check">
        <span className="checkbox__color" style={{ backgroundColor: color }}>
          {" "}
          <p>{label}</p>
        </span>
      </span>
    </label>
  );
};

export default CheckboxColor;
