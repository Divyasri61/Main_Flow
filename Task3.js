document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("myForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("pssd");
  const confirmPasswordInput = document.getElementById("cpssd");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    

    resetErrors();
    resetSuccessMessage();

    let valid = true;


    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required.");
      valid = false;
    }


    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email is required.");
      valid = false;
    } else if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address.");
      valid = false;
    }

    if (passwordInput.value.trim() === "") {
      showError(passwordInput, "Password is required.");
      valid = false;
    } else if (passwordInput.value.length < 8) {
      showError(passwordInput, "Password must be at least 8 characters long.");
      valid = false;
    }


    if (confirmPasswordInput.value.trim() === "") {
      showError(confirmPasswordInput, "Confirm Password is required.");
      valid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      showError(confirmPasswordInput, "Passwords do not match.");
      valid = false;
    }

    if (valid) {
      displaySuccessMessage();
    }
  });

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error";
    error.innerText = message;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  function resetErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.remove());
  }

  function resetSuccessMessage() {
    const successMessages = document.querySelectorAll(".success");
    successMessages.forEach(successMessage => successMessage.remove());
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function displaySuccessMessage() {
    const successMessage = document.createElement("div");
    successMessage.className = "success";
    successMessage.innerText = "Form submitted successfully!";
    form.parentNode.appendChild(successMessage);
    form.reset();
  }
});
