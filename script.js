
  const form = document.getElementById("form");

  const pass1 = document.getElementById("pass1");

  const pass2 = document.getElementById("pass2");
const good=document.getElementById("success");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    const password = pass1.value.trim();
    const confirmPassword = pass2.value.trim();

    if (password.length < 8) {
      
      success.style.display ="block"
      success.innerHTML ="Password must be 8 character long"
            success.style.color="red"

      return;
    }

    if (password !== confirmPassword) {
      
      success.style.display ="block"
      success.innerHTML ="Password does not match"
        success.style.color="red"
      return;
    }

    success.style.display ="block"
      success.innerHTML ="Sucessfull"
        success.style.color="green"
  });

