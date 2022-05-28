const filter_btns = document.querySelectorAll(".filter-btn");
const links = document.querySelectorAll(".links a");

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".news-wrap",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});