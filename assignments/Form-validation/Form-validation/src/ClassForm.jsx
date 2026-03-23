import React, { Component } from "react";
import { formConfig } from "./formConfig";
import { cities } from "./cities";

class ClassForm extends Component {
  state = {
    values: {
      state: "",
      city: ""
    },
    errors: {},
    validateOnChange: false
  };

  validate = (name, value) => {
    const field = formConfig.find(f => f.name === name);
    let error = "";

    if (field?.required && !value) error = "Required";

    if (field?.regex && value && !field.regex.test(value))
      error = "Invalid format";

    if (name === "confirmPassword") {
      if (value !== this.state.values.password)
        error = "Passwords not matching";
    }

    return error;
  };

  handleChange = e => {
    const { name, value } = e.target;

    if (name === "phone" && isNaN(value)) return;

    this.setState(prev => {
      const values = { ...prev.values, [name]: value };

      let errors = { ...prev.errors };

      if (prev.validateOnChange) {
        errors[name] = this.validate(name, value);
      }

      return { values, errors };
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let errors = {};
    formConfig.forEach(field => {
      errors[field.name] = this.validate(
        field.name,
        this.state.values[field.name]
      );
    });

    this.setState({ errors, validateOnChange: true });

    const hasError = Object.values(errors).some(e => e);

    if (!hasError) alert("Form Submitted");
  };

  clearForm = () => {
    this.setState({ values: { state: "", city: "" }, errors: {}, validateOnChange: false });
  };

  render() {
    const { values, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Class Form</h2>

        <select
          name="state"
          value={values.state || ""}
          onChange={this.handleChange}
          onBlur={this.handleChange}
        >
          <option value="">Select State</option>
          {Object.keys(cities).map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {values.state && (
          <select name="city" value={values.city || ""} onChange={this.handleChange}>
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
              defaultValue=""
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
            <p style={{ color: "red" }}>{errors[field.name]}</p>
          </div>
        ))}

        <button type="submit">Submit</button>
        <button type="button" onClick={this.clearForm}>
          Clear
        </button>
      </form>
    );
  }
}

export default ClassForm;