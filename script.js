// Sample preview by J M Enterprise - progressive enhancement only.
// The page is fully readable if this file fails to load.
(function () {
  document.documentElement.classList.add("js");

  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add("in");
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  for (var j = 0; j < items.length; j++) io.observe(items[j]);

  // Safety net: never leave content hidden.
  window.setTimeout(function () {
    for (var k = 0; k < items.length; k++) items[k].classList.add("in");
  }, 2500);
})();
