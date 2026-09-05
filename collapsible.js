(function () {
  const toggle = document.getElementById("dev-zone-toggle");
  const panel = document.getElementById("dev-zone-products");
  if (!toggle || !panel) return;

  const label = toggle.querySelector(".dev-zone__toggle-label");
  const nonViableIds = ["mug-11oz", "key-caddy", "acrylic-frame", "lunch-bag"];

  function setExpanded(expanded) {
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    panel.hidden = !expanded;
    if (label) {
      label.textContent = expanded
        ? "Hide non-viable products"
        : "Show non-viable products";
    }
  }

  toggle.addEventListener("click", function () {
    setExpanded(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.querySelectorAll(".jump-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      const id = (link.getAttribute("href") || "").replace(/^#/, "");
      if (nonViableIds.indexOf(id) !== -1) {
        setExpanded(true);
      }
    });
  });
})();
