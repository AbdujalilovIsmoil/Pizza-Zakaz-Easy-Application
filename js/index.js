"use strict";

const array = [];

$(".section__pitsa_container_box_select").addEventListener("change", (e) => {
  $(".section__pitsa_container_box_result-paragraph").innerHTML = e.target.value;
  array.push(e.target.value);
});


for (let i = 0; i < $$(".section__pitsa_container_box_sizes-size").length; i++) {
  $$(".section__pitsa_container_box_sizes-size")[i].addEventListener("click", (e) => {
    $(".section__pitsa_container_box_results-paragraph").innerHTML = e.target.innerHTML;
    array.push(e.target.innerHTML);
  });
}


for (let i = 0; i < $$(".section__pitsa_container_box_form_box_label-input").length; i++) {
  const elements = document.createElement("li");
  $$(".section__pitsa_container_box_form_box_label-input")[i].addEventListener("click", (e) => {
    if (e.target.checked == true) {
      elements.innerHTML = e.target.value;
      elements.classList.add("section__pitsa_container_box_list-item");
      array.push(e.target.value);
    } else {
      elements.innerHTML = "";
      elements.classList.remove("section__pitsa_container_box_list-item");
      array.pop();
    }
    $(".section__pitsa_container_box_list").appendChild(elements);
  });
}



for (let i = 0; i < $$(".section__pitsa_container_box_forms_box_label-input").length; i++) {
  const element = document.createElement("li");
  $$(".section__pitsa_container_box_forms_box_label-input")[i].addEventListener("click", (e) => {
    if (e.target.checked == true) {
      element.innerHTML = e.target.value;
      element.classList.add("section__pitsa_container_box_list-item");
      array.push(e.target.value);
    } else {
      element.innerHTML = "";
      element.classList.remove("section__pitsa_container_box_list-item");
      array.pop();
    }
    $(".section__pitsa_container_box_lists").appendChild(element);
  });
}

function hideTabSize() {
  $$(".section__pitsa_container_box_sizes-size").forEach(item => {
    item.classList.remove("active");
  });
}

function showTabSize(i = 0) {
  $$(".section__pitsa_container_box_sizes-size")[i].classList.add("active");
}

hideTabSize();
showTabSize();

$(".section__pitsa_container_box_sizes").addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("section__pitsa_container_box_sizes-size")) {
    for (let i = 0; i < $$(".section__pitsa_container_box_sizes-size").length; i++) {
      if (e.target == $$(".section__pitsa_container_box_sizes-size")[i]) {
        console.log($$(".section__pitsa_container_box_sizes-size")[i].innerHTML);
        hideTabSize();
        showTabSize(i);
      }
    }
  }
});


$(".section__pitsa_container_box-btn").addEventListener("click", (e) => {
  if (array.length <= 4) {
    $("#check").setAttribute("class", "fa fa-x");
    $(".modal").setAttribute("class", "modal active");
    console.log("Ichi bosh")
  } else {
    $("#check").setAttribute("class", "fa fa-check");
    $(".modal").setAttribute("class", "modal active");
  }
});

$(".modal__container_x").addEventListener("click", () => {
  $(".modal").classList.remove("active");
});

$(".modal").addEventListener("click", () => {
  if ($(".modal")) {
    $(".modal").classList.remove("active");
  }
});

this.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    $(".modal").classList.remove("active");
  }
});