function modify() {
    // Accessing form elements
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    //   Reading and modifying form element's properties
    // Reading
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    console.log(emailValue, passwordValue, "email, password");
    //   modifying
  
    emailInput.value = " email@gmail.com";
    passwordInput.value = " 12345";
  }
  function onInputExample(event) {
    let emailText = document.getElementById("text");
    let inputValue = document.getElementById("displayMsg");
    emailText.textContent = event.target.value;
    inputValue.textContent = emailText.value;
  }
  function onFocusExample() {
    let inputFocus = document.getElementById("focus");
    inputFocus.style.border = "2px solid red";
  }
  
  let emailInputExample = document.getElementById("inputElment");
  let message = document.getElementById("output");
  emailInputExample.addEventListener("blur", () => {
    if (!emailInputExample.value.includes("@")) {
      message.textContent = "please enter a valid email!!";
      message.style.color = "red";
    } else {
      message.textContent = emailInputExample.value;
      message.style.color = "black";
    }
  });