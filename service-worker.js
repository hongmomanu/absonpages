!function(){"use strict";const e=["client/about.9743f2ec.js","client/[slug].195d9e5d.js","client/util.c3d26849.js","client/index.ea976c83.js","client/index.8fca06d2.js","client/index.7cf44b8e.js","client/glass.1f0641e2.js","client/client.4fff6817.js"].concat(["service-worker-index.html","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","pure-min.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1566739152377").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1566739152377"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1566739152377").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
