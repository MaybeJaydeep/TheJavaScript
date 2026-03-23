import React, { useState } from "react";
import { formSchema } from "./schema";
import { cities } from "./cities";

export default function ZodFunctionalForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [validateOnChange, setValidateOnChange] = useState(false);

  const validateField = (name, value, currentValues = values) => {
    const merged = { ...currentValues, [name]: value };
    const result = formSchema.safeParse(merged);

    if (result.success) return "";

    const err = result.error.errors.find(e => e.path[0] === name);
    return err ? err.message : "";
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === "phone" && isNaN(value)) return;

    setValues(prev => {
      const next = { ...prev, [name]: value };
      if (validateOnChange) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: validateField(name, value, next)
        }));
      }
      return next;
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const result = formSchema.safeParse(values);

    if (!result.success) {
      let errObj = {};

      result.error.errors.forEach(err => {
        errObj[err.path[0]] = err.message;
      });

      setErrors(errObj);
      setValidateOnChange(true);
      return;
    }

    alert("Form Submitted Successfully");
  };

  const clearForm = () => {
    setValues({});
    setErrors({});
    setValidateOnChange(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Zod Functional Form</h2>

      <select
        name="state"
        onChange={handleChange}
        onBlur={handleChange}
        defaultValue=""
      >
        <option value="">Select State</option>

        {Object.keys(cities).map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <p style={{ color: "red" }}>{errors.state}</p>

      {values.state && (
        <>
          <select
            name="city"
            onChange={handleChange}
            defaultValue=""
          >
            <option value="">Select City</option>

            {cities[values.state].map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <p style={{ color: "red" }}>{errors.city}</p>
        </>
      )}

      <input
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.fullName}</p>

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.phone}</p>

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.password}</p>

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.confirmPassword}</p>

      <input
        name="creditCard"
        placeholder="Credit Card (optional)"
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.creditCard}</p>

      <button type="submit">Submit</button>

      <button type="button" onClick={clearForm}>
        Clear
      </button>
    </form>
  );
}