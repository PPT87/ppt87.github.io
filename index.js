!(function () {
  var e = (window.htevents = window.htevents || []);
  if (!e.initialize)
    if (e.invoked)
      window.console &&
        console.error &&
        console.error("Hightouch snippet included twice.");
    else {
      (e.invoked = !0),
        (e.methods = [
          "trackSubmit",
          "trackClick",
          "trackLink",
          "trackForm",
          "pageview",
          "identify",
          "reset",
          "group",
          "track",
          "ready",
          "alias",
          "debug",
          "page",
          "once",
          "off",
          "on",
          "addSourceMiddleware",
          "addIntegrationMiddleware",
          "setAnonymousId",
          "addDestinationMiddleware",
        ]),
        (e.factory = function (t) {
          return function () {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(t), e.push(n), e;
          };
        });
      for (var t = 0; t < e.methods.length; t++) {
        var n = e.methods[t];
        e[n] = e.factory(n);
      }
      (e.load = function (t, n) {
        var o = document.createElement("script");
        (o.type = "text/javascript"),
          (o.async = !0),
          (o.src =
            "https://cdn.hightouch-events.com/browser/release/v1-latest/events.min.js");
        var r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(o, r),
          (e._loadOptions = n),
          (e._writeKey = t);
      }),
        (e.SNIPPET_VERSION = "0.0.1"),
        e.load(
          "97a8479d46d07ff6ff37b908c44b470196560ff91571d26162910e0309d4417c",
          { apiHost: "us-east-1.hightouch-events.com" }
        ),
        e.page();
    }
})();

let welcomeBtn = document.getElementById("welcomeBtn");
welcomeBtn.addEventListener("click", function () {
  // Track the button click event
  htevents.track("Welcome button clicked", {
    button: "welcome button",
    order: "first",
  });
});

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  // Track the button click event
  htevents.track("Submit button clicked", {
    order: "second",
  });
});
