const myApp = "first-aid-v1";
const assets = [];

self.addEventListener("install", async e => {
    const cache = await caches.open(myApp);
    await cache.addAll(assets);
    return self.skipWaiting();
});

self.addEventListener("activate", e => {
    self.clients.claim();
});

self.addEventListener("fetch", e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin == location.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});



async function cacheFirst(req) {
    const cache = await caches.open(myApp);
    const cached = await cache.match(req);
    return cached || fetch(req);
}


async function networkAndCache(req) {
    const cache = await caches.open(myApp);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await caches.match(req);
        return cached;
    }
}