function toggleMergeButton(element) {
  if (element.className.indexOf("primary") > -1) {
    element.className = element.className.replace(/primary/g, 'disabled').replace(/js-details-target/g, '');
  }
}

function observeMergeButton() {
  var target = document.querySelector('body');
  var config = {
    childList: true,
    subtree: true,
    characterData: true
  };

  var observer = new MutationObserver(function(mutations, self) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'characterData' || mutation.type === 'childList') {
        var elements = document.querySelectorAll('.merge-branch-action');
        Array.prototype.forEach.call(elements, function(element) {
          toggleMergeButton(element);
        });
      }
    });
  });

  observer.observe(target, config);
}

window.onload = function() {
  toggleMergeButton(document.querySelector(".merge-branch-action"));
  observeMergeButton();
}
