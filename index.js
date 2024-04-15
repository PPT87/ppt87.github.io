const welcomeBtn = document.getElementById("welcomeBtn");
welcomeBtn.addEventListener("click", function () {
  // Track the button click event
  htevents.track("Welcome button clicked", {
    button: "welcome button",
    order: "first",
  });
});

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  // Track the button click event
  htevents.track("Submit button clicked", {
    order: "second",
  });
});
