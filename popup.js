var lockOptionElement;

document.addEventListener("DOMContentLoaded", function () {
  console.clear();
  console.log("popup.js loaded");

  lockOptionElement = document.querySelector(".lockOption");
  lockOptionElement.addEventListener("click", lockOption);
});

function lockOption() {
  console.log("Calling background lock function");

  chrome.runtime.sendMessage({ method: "codeYellow", code: "248057" }, function (response) {
    if (response.result == 0) {
      console.log("Lock function returned in +ve");
    } else {
      console.log("Lock function returned in -ve");
    }
  });

  window.close();
}
