console.log("service worker file");
// console.log(self);

self.addEventListener('fetch', function (event) {
    console.log(event);
    // event.respondWith(
    //     caches.match(event.request)
    //     .then(function (response) {
    //         if (response) {
    //             return response;
    //         }
    return fetch(event.request);
    //     });
    // );
});

self.addEventListener('fetch', function (event) {
    if (/\.jpg$/.test(event.request.url)) {
        event.respondWith(
            fetch('//upload.wikimedia.org/wikipedia/commons/8/8f/Bachalpsee_reflection.jpg', {
                mode: 'no-cors'
            })
        );
    }
});
