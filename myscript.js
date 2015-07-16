window.onload = function() {
  element = document.querySelector(".merge-branch-action");
  if (element.className.indexOf("primary") > -1) {
    element.className = element.className.replace(/primary/g, 'disabled').replace(/js-details-target/g, '');
  }
}
