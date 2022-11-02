const $ = (selector) => {
  return document.querySelector(selector);
}

const $$ = (selectors) => {
  return document.querySelectorAll(selectors);
}