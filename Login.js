document.addEventListener('DOMContentLoaded', function() {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  function validateInput(input) {
    return input.value.trim() !== '';
  }

  document.querySelector('.sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.querySelector('input[type="text"]');

    if (validateInput(usernameInput)) {
        window.location.href = 'index.html';
    } else {
        console.log('Please fill in all fields.');
    }
});


  document.querySelector('.sign-up-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const usernameInput = document.querySelector('input[type="text"]');

      if (validateInput(usernameInput)) {
        window.location.href = '.sign-in-form';
        container.classList.remove("sign-up-mode");
      } else {
          console.log('Please fill in all fields.');
      }
  });
});

