var target = document.querySelector('body');
var config = {
  childList: true,
  subtree: true
};

var observer = new MutationObserver(function(mutations, self) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
      var elements = document.querySelectorAll('#js-pull-merging .primary.merge-branch-action');
      Array.prototype.forEach.call(elements, function(element) {
        if (document.getElementsByClassName("js-issue-title")[0].textContent > -1) {
          if (element.className.indexOf("primary") > -1) {
            element.className = element.className.replace(/primary/g, 'disabled').replace(/js-details-target/g, '');
          }
        }
      });
    }
  });
});

observer.observe(target, config);
