// Currency converter

const currencyData = {
  USD: 1,
  INR: 82,
  EUR: 0.8,
};

const converter = (amount, from, to) => {
  const inDoller = amount / currencyData[from];

  return currencyData[to] * inDoller;
};

const result = converter(100, "USD", "INR");
console.log(result, "result");

// check divid 3 and  5

const check = (start, end) => {
  let array = [];

  for (let i = start; i < end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBazz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Bazz");
    } else {
      array.push(i);
    }
  }
  return array;
};

const result2 = check(1, 18);
console.log(result2, "result2");

// Validate Password
const validatePassword = (password) => {
  // Minimum password length
  const minLength = 6;

  // Check if password has at least one uppercase letter (ASCII code between 65 and 90)
  // and at least one lowercase letter (ASCII code between 97 and 122)
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;

  // Loop through each character in the password
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);

    // Check if the character is an uppercase letter (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      hasUpperCase = true;
    }

    // Check if the character is a lowercase letter (a-z)
    if (charCode >= 97 && charCode <= 122) {
      hasLowerCase = true;
    }

    // Check if the character is a number (0-9)
    if (charCode >= 48 && charCode <= 57) {
      hasNumber = true;
    }
  }

  // Check for minimum length
  if (password.length < minLength) {
    return "Password must be at least 6 characters long.";
  }

  // Check for at least one uppercase letter
  if (!hasUpperCase) {
    return "Password must contain at least one uppercase letter.";
  }

  // Check for at least one lowercase letter
  if (!hasLowerCase) {
    return "Password must contain at least one lowercase letter.";
  }

  // If all checks pass
  return "Password is valid!";
};

// Example usage
console.log(validatePassword("Password")); // Password is valid!
console.log(validatePassword("password")); // Password must contain at least one uppercase letter.
console.log(validatePassword("PASSWORD")); // Password must contain at least one lowercase letter.
console.log(validatePassword("Pass")); // Password must be at least 6 characters long.
