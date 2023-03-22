function makeRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./intercept", true);
  xhr.onload = function () {
    if (xhr.responseText === "intercepted") {
      console.log("[SUCCESS]: TEST PASSED");
    } else {
      console.error(
        '[ERROR]: TEST FAILED: expected "intercepted", got ' +
          xhr.responseText.slice(0, 30)
      );
    }
  };
  xhr.onerror = function () {
    console.error("Request failed with status " + xhr.status);
    console.error("[ERROR]: TEST FAILED");
  };
  xhr.send();
}

makeRequest();
