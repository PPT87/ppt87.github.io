const welcomeBtn = document.getElementById("welcomeBtn");
const submitBtn = document.getElementById("submitBtn");

button.addEventListener("click", function () {
  // Track the button click event
  htevents.track("Welcome button clicked", {
    button: "welcome button",
    order: "first",
  });
});

button.addEventListener("click", function () {
  // Track the button click event
  htevents.track("Submit button clicked", {
    order: "second",
  });
});
