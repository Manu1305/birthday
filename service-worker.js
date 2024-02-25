self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/hello.html',
                
            ]);
        })
    );
});

self.addEventListener('install', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('v') && cacheName !== 'v1';
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

// self.addEventListener('install',e=>{
//     e.waitUntil(
//         caches.open("1305").then(cache=>{
//             return cache.addAll(["./hello.html"])
//         })
//     )
// })

// self.addEventListener("fetch",e=>{
//     console.log('interception'+e.request.url)
    

// })
