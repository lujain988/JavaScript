document.getElementById("firstName").addEventListener("input", (e) => {
  let warning = document.getElementById("firstName-warning");
  if (/[0-9]/.test(e.target.value))
    warning.innerText = "You can not use numbers in your first name!";
  else warning.innerText = "";
});
document.getElementById("lastName").addEventListener("input", (e) => {
  let warning = document.getElementById("lastName-warning");
  if (/[0-9]/.test(e.target.value))
    warning.innerText = "You can not use numbers in your last name!";
  else warning.innerText = "";
});
document.getElementById("birthDate").addEventListener("input", (e) => {
  let warning = document.getElementById("birthDate-warning");
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(e.target.value)) {
    warning.innerText = "Please enter a valid birth date in dd/mm/yyyy format!";
  } else {
    warning.innerText = "";
  }
});

document.getElementById("email").addEventListener("input", (e) => {
  let warning = document.getElementById("email-warning");
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
    warning.innerText = "Please enter a valid email address!";
  } else {
    warning.innerText = "";
  }
});

document.getElementById("confirmEmail").addEventListener("input", (e) => {
  let warning = document.getElementById("confirmEmail-warning");
  let email = document.getElementById("email").value;
  if (e.target.value !== email) {
    warning.innerText = "Email addresses do not match!";
  } else {
    warning.innerText = "";
  }
});

document.getElementById("password").addEventListener("input", (e) => {
  let warning = document.getElementById("password-warning");
  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(e.target.value)) {
    warning.innerText =
      "Password must contain at least 8 characters, including one number, one lowercase and one uppercase letter!";
  } else {
    warning.innerText = "";
  }
});

document.getElementById("confirmPassword").addEventListener("input", (e) => {
  let warning = document.getElementById("confirmPassword-warning");
  let password = document.getElementById("password").value;
  if (e.target.value !== password) {
    warning.innerText = "Passwords do not match!";
  } else {
    warning.innerText = "";
  }
});
