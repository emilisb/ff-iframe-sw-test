function makeRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./intercept", true);
  xhr.onload = function () {
    console.log("Response: " + xhr.responseText);
    if (xhr.responseText === "intercepted") {
      console.log("[SUCCESS]: TEST PASSED");
    }
  };
  xhr.onerror = function () {
    console.error("Error" + xhr.status);
    console.error("[ERROR]: TEST FAILED");
  };
  xhr.send();
}

makeRequest();
