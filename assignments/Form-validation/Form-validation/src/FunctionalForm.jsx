import React, { useState } from "react";
import { formConfig } from "./formConfig";
import { cities } from "./cities";

export default function FunctionalForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [validateOnChange, setValidateOnChange] = useState(false);


  const validate = (name, value) => {
    const field = formConfig.find(f => f.name === name);

    if (field?.required && !value) return "Required";

    if (field?.regex && value && !field.regex.test(value))
      return "Invalid format";

    if (name === "confirmPassword" && value !== values.password)
      return "Password mismatch";

    return "";
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === "phone" && isNaN(value)) return;

    setValues(prev => ({ ...prev, [name]: value }));

    if (validateOnChange) {
      setErrors(prev => ({
        ...prev,
        [name]: validate(name, value)
      }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    let newErrors = {};
    formConfig.forEach(f => {
      newErrors[f.name] = validate(f.name, values[f.name]);
    });

    setErrors(newErrors);
    setValidateOnChange(true);

    const hasError = Object.values(newErrors).some(e => e);

    if (!hasError) alert("Submitted");
  };

  const clearForm = () => {
    setValues({});
    setErrors({});
    setValidateOnChange(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Functional Form</h2>

      <select name="state" value={values.state || ""} onChange={handleChange}>
        <option value="">Select State</option>
        {Object.keys(cities).map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      {values.state && (
        <select name="city" value={values.city || ""} onChange={handleChange}>
          <option value="">Select City</option>
          {cities[values.state].map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      )}

      {formConfig.map(field => (
        <div key={field.name}>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.label}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors[field.name]}</p>
        </div>
      ))}

      <button>Submit</button>
      <button type="button" onClick={clearForm}>
        Clear
      </button>
    </form>
  );
}