/* ============================================================
   Donnell Khanderia Home Search — the spices (behaviour).
   ONE script for every page: the town filter and the
   photo auto-fit. Nothing page-specific lives here.
   ============================================================ */

/* Town filter — chips with data-filter on a [data-filter-group].
   Tiles carry data-town. "all" shows everything. */
document.querySelectorAll("[data-filter-group]").forEach(function (group) {
  var target = document.querySelector(group.getAttribute("data-filter-group"));
  if (!target) return;
  group.addEventListener("click", function (e) {
    var chip = e.target.closest("[data-filter]");
    if (!chip) return;
    group.querySelectorAll("[data-filter]").forEach(function (c) {
      c.setAttribute("aria-pressed", c === chip ? "true" : "false");
    });
    var want = chip.getAttribute("data-filter");
    target.querySelectorAll("[data-town]").forEach(function (tile) {
      tile.style.display = (want === "all" || tile.getAttribute("data-town") === want) ? "" : "none";
    });
  });
});

/* Photo auto-fit — when a tile's frame badly fights its photo's
   shape, show the whole photo over a blurred fill of itself
   instead of cropping most of it away. */
function autoFit(scope) {
  (scope || document).querySelectorAll(".tile .ph").forEach(function (ph) {
    var img = ph.querySelector("img");
    if (!img || !img.naturalWidth) return;
    var rect = ph.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    var cellAR = rect.width / rect.height;
    var photoAR = img.naturalWidth / img.naturalHeight;
    var ratio = cellAR / photoAR;
    if (ratio < 0.42 || ratio > 2.4) {
      if (!ph.classList.contains("fit")) {
        ph.classList.add("fit");
        var bg = document.createElement("span");
        bg.className = "fillbg";
        bg.style.backgroundImage = "url(" + img.getAttribute("src") + ")";
        ph.insertBefore(bg, img);
      }
    } else {
      ph.classList.remove("fit");
      var old = ph.querySelector(".fillbg");
      if (old) old.remove();
    }
  });
}
window.addEventListener("load", function () { autoFit(); });
window.addEventListener("resize", function () { autoFit(); });
