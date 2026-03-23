export const formConfig = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    required: true
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    required: true,
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    required: true,
    regex: /^\d{10}$/
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    regex: /^(?=.*[A-Z])(?=.*\d).{6,}$/
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    required: true
  },
  {
    name: "creditCard",
    label: "Credit Card",
    type: "text",
    required: false,
    regex: /^\d{16}$/
  }
];