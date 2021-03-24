chrome.storage.sync.get(["customCSS"], function (items) {
  function addStyle(styles) {
    var css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName("head")[0].appendChild(css);
  }
  window.onload = function () {
    addStyle(
      items.customCSS || ""
    );
  };
});