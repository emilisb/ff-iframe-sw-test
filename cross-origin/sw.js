self.oninstall = () => self.skipWaiting();

self.onactivate = () => self.clients.claim();

self.onfetch = (ev) => {
  if (ev.request.url.includes("intercept")) {
    ev.respondWith(new Response("intercepted"));
  } else {
    ev.respondWith(fetch(ev.request));
  }
};
