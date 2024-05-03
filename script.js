// User data storage
let users = [];

// Function to register a new user
function registerUser(username, password) {
  // Check if the username already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return {
      success: false,
      message: "Username already exists. Please choose a different one.",
    };
  }

  // Store the user information securely
  users.push({ username: username, password: password });
  return { success: true, message: "User registered successfully." };
}

// Function to authenticate user login
function loginUser(username, password) {
  // Find the user by username
  const user = users.find((user) => user.username === username);
  if (!user) {
    return {
      success: false,
      message: "User not found. Please register first.",
    };
  }

  // Check if the password is correct
  if (user.password === password) {
    return {
      success: true,
      message: "Login successful. Redirecting to secured page...",
    };
  } else {
    return { success: false, message: "Invalid password. Please try again." };
  }
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;
    const registrationResult = registerUser(regUsername, regPassword);
    document.getElementById("message").innerHTML = registrationResult.message;
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginResult = loginUser(username, password);
    document.getElementById("message").innerHTML = loginResult.message;
    if (loginResult.success) {
      // Redirect to secured page
      window.location.href = "secured_page.html";
    }
  });
