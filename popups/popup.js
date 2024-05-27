var lockOptionElement, settingButtonElement;

document.addEventListener("DOMContentLoaded", function () {
  console.clear();
  console.log("popup.js loaded");

  // run background service
  lockOptionElement = document.querySelector(".lockNow");
  lockOptionElement.addEventListener("click", lockNow);

  // setting button
  settingButtonElement = document.querySelector(".settingButton");
  settingButtonElement.addEventListener("click", openSetting);
});

function lockNow() {
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

function openSetting() {
  chrome.tabs.create({
    url: "../settings/setting.html",
    active: false,
    pinned: false,
  });

  window.close();
}
