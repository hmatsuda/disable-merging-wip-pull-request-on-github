function toggleMergeButton(element) {
  if (document.getElementsByClassName("js-issue-title")[0].textContent.indexOf("WIP") > -1) {
    if (element.className.indexOf("primary") > -1) {
      element.className = element.className.replace(/primary/g, 'disabled').replace(/js-details-target/g, '');
    }
  } else {
    if (element.className.indexOf("disabled") > -1) {
      element.className = element.className.replace(/disabled/g, 'primary js-details-target');
    }
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
