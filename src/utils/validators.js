// validators.js
export const validators = {
  name: (value) => /^[A-Za-z\s]*$/.test(value),

  company: (value) => /^[A-Za-z0-9\s]*$/.test(value),

  email: (value) => /^[a-zA-Z0-9@._%+!#$&'*+/=?^_{|}~`-]*$/.test(value),

  phone: (value) =>
    /^\d{0,10}$/.test(value), // allow typing until 10 digits

  service: (value) =>
    /^\d*\.?\d*$/.test(value), // integer or float
};

// final email check
export const isValidEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);