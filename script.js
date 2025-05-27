
  const form = document.getElementById("form");

  const pass1 = document.getElementById("pass1");

  const pass2 = document.getElementById("pass2");

  const submit = document.getElementById("submit");

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    const password = pass1.value.trim();
    const confirmPassword = pass2.value.trim();

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Successful");
  });

