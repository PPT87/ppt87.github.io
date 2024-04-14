let welcomeBtn = document.getElementById("welcomeBtn");
button.addEventListener("click", function () {
  // Track the button click event
  htevents.track("Welcome button clicked", {
    button: "welcome button",
    order: "first",
  });
});

let submitBtn = document.getElementById("submitBtn");
button.addEventListener("click", function () {
  // Track the button click event
  htevents.track("Submit button clicked", {
    order: "second",
  });
});
