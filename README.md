**Example demonstrating how a Mozilla Firefox service worker in a cross-origin iframe cannot intercept network requests initiated by a web worker.**

## Setup

The project should be deployed in the following way ([deployed demo available here](https://ff-iframe-sw-test.netlify.app/)):

- mydomain.com
  - index.html
- somedifferentdomain.com
  - app.html
  - sw.js
  - worker.js

## Test scenario

_mydomain.com/index.html_ loads an iframe from _somedifferentdomain.com/app.html_ which spawns a service worker and a web worker. A web worker makes a network request to _somedifferentdomain.com/intercept_. The service worker, the web worker and network request URL belong to the same origin and the request url belongs to the service worker scope.

**Expected behavior**: service worker successfully intercepts the request and returns a word "intercepted".

**Actual behaviour**:

- Safari, Chrome - works as expected.
- Firefox - service worker does not intercept the request and an actual request to _somedifferentdomain.com/intercept_ is made.

## Testing on deployed example

[Open the deployed example](https://ff-iframe-sw-test.netlify.app/) and check devtools console. It should log either `[SUCCESS]: TEST PASSED` (on Chrome and Safari) or `[ERROR]: TEST FAILED: expected "intercepted", got <!DOCTYPE html>` (on Firefox).
