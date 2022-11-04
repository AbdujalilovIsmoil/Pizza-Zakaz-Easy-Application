"use strict";

// Array
const selectArray = [];
const sizesArray = [];
const productsArray = [];
const thingProductsArray = [];

// Select Changed
$(".section__pitsa_container_box_select").addEventListener("change", (e) => {
  $(".section__pitsa_container_box_result-paragraph").innerHTML =
    e.target.value;
  selectArray.push(e.target.value);
});

// Sizes Result
for (
  let i = 0;
  i < $$(".section__pitsa_container_box_sizes-size").length;
  i++
) {
  $$(".section__pitsa_container_box_sizes-size")[i].addEventListener(
    "click",
    (e) => {
      $(".section__pitsa_container_box_results-paragraph").innerHTML =
        e.target.innerHTML;
      sizesArray.push(e.target.innerHTML);
    }
  );
}

// The sizes hide and show BgColor Tabs
function hideTabSize() {
  $$(".section__pitsa_container_box_sizes-size").forEach((item) => {
    item.classList.remove("active");
  });
}

function showTabSize(i = 0) {
  $$(".section__pitsa_container_box_sizes-size")[i].classList.add("active");
}

hideTabSize();
showTabSize();

$(".section__pitsa_container_box_sizes").addEventListener("click", (e) => {
  if (
    e.target &&
    e.target.classList.contains("section__pitsa_container_box_sizes-size")
  ) {
    for (
      let i = 0;
      i < $$(".section__pitsa_container_box_sizes-size").length;
      i++
    ) {
      if (e.target == $$(".section__pitsa_container_box_sizes-size")[i]) {
        hideTabSize();
        showTabSize(i);
      }
    }
  }
});

// Products Changed
for (
  let i = 0;
  i < $$(".section__pitsa_container_box_form_box_label-input").length;
  i++
) {
  const elements = document.createElement("li");
  $$(".section__pitsa_container_box_form_box_label-input")[i].addEventListener(
    "click",
    (e) => {
      if (e.target.checked == true) {
        elements.innerHTML = e.target.value;
        elements.classList.add("section__pitsa_container_box_list-item");
        productsArray.push(e.target.value);
      } else {
        elements.innerHTML = "";
        elements.classList.remove("section__pitsa_container_box_list-item");
        productsArray.pop();
      }
      $(".section__pitsa_container_box_list").appendChild(elements);
    }
  );
}

// Products kinds of Things
for (
  let i = 0;
  i < $$(".section__pitsa_container_box_forms_box_label-input").length;
  i++
) {
  const element = document.createElement("li");
  $$(".section__pitsa_container_box_forms_box_label-input")[i].addEventListener(
    "click",
    (e) => {
      if (e.target.checked == true) {
        element.innerHTML = e.target.value;
        element.classList.add("section__pitsa_container_box_list-item");
        thingProductsArray.push(e.target.value);
      } else {
        element.innerHTML = "";
        element.classList.remove("section__pitsa_container_box_list-item");
        thingProductsArray.pop();
      }
      $(".section__pitsa_container_box_lists").appendChild(element);
    }
  );
}

$(".section__pitsa_container_box-btn").addEventListener("click", (e) => {
  if (
    selectArray.length <= 0 ||
    sizesArray.length <= 0 ||
    productsArray.length <= 0
  ) {
    $(".modal").setAttribute("class", "modal active");
    $("#check").setAttribute("class", "fa fa-x");
  } else {
    $(".modal").setAttribute("class", "modal active");
    $("#check").setAttribute("class", "fa fa-check");
  }
});

this.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    $(".modal").classList.remove("active");
  }
});

$("#modal-remove").addEventListener("click", () => {
  if (
    selectArray.length <= 0 ||
    sizesArray.length <= 0 ||
    productsArray.length <= 0
  ) {
    $(".modal").setAttribute("class", "modal");
    $("#check").setAttribute("class", "fa fa-x");
  }
  if (
    selectArray.length != 0 &&
    sizesArray.length != 0 &&
    productsArray.length != 0
  ) {
    $(".modal").setAttribute("class", "modal");
    $("#check").setAttribute("class", "fa fa-x");
    $("#modal-remove").setAttribute("href", "index.html");
  }
});
