(function () {
  const dialog = document.createElement("div");
  dialog.className = "lightbox";
  dialog.hidden = true;
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", "Larger product photo");
  dialog.innerHTML =
    '<button type="button" class="lightbox__close" aria-label="Close larger photo">&times;</button>' +
    '<img class="lightbox__image" alt="" />';
  document.body.appendChild(dialog);

  const image = dialog.querySelector(".lightbox__image");
  const closeBtn = dialog.querySelector(".lightbox__close");
  let lastFocus = null;

  function openLightbox(src, alt) {
    lastFocus = document.activeElement;
    image.src = src;
    image.alt = alt || "Product photo";
    dialog.hidden = false;
    document.body.classList.add("lightbox-open");
    closeBtn.focus();
  }

  function closeLightbox() {
    if (dialog.hidden) return;
    dialog.hidden = true;
    document.body.classList.remove("lightbox-open");
    image.removeAttribute("src");
    image.alt = "";
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  document.addEventListener("click", function (event) {
    const trigger = event.target.closest("[data-lightbox-src]");
    if (trigger) {
      event.preventDefault();
      openLightbox(
        trigger.getAttribute("data-lightbox-src"),
        trigger.getAttribute("data-lightbox-alt") || ""
      );
      return;
    }

    if (!dialog.hidden && (event.target === dialog || event.target === closeBtn)) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !dialog.hidden) {
      closeLightbox();
    }
  });
})();
