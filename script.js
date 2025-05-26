




const password1 = document.getElementById("pass1").value;

const password2 = document.getElementById("pass2").value;

const good = document.getElementById("success");

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const password1 = document.getElementById("pass1").value;
  const confirmPassword2 = document.getElementById("pass2").value;

  // Validation
  if (password1.length < 8) {
    good.innerText = "Password must be at least 8 characters long.";
    good.style.visibility = "visible";
  }

  if (password1 !== confirmPassword2) {
    good.innerText = "Password and Confirm Password must match.";
    // good.style.visibility = "hidden";
  }

  if (password1 == confirmPassword2) {
    good.innerText = "Password and Confirm Password  match.";
    good.style.visibility = "visible";
  }
});
