function save() {
  var customCSS = document.getElementById("custom-css").value;
  console.log(customCSS);
  chrome.storage.sync.set(
    {
      customCSS: customCSS,
    },
    function () {
      document.getElementById("save").textContent = "Saved!";
      setTimeout(function () {
        document.getElementById("save").textContent = "Save";
      }, 750);
    }
  );
}

function restore() {
  chrome.storage.sync.get(["customCSS"], function (items) {
    document.getElementById("custom-css").value = items.customCSS || "";
  });
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("save").addEventListener("click", save);