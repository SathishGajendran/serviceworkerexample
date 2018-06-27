if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/ServiceWorker.js')
        .then(function (response) {

            // Service worker registration done
            console.log('Registration Successful', response);
        }, function (error) {
            // Service worker registration failed
            console.log('Registration Failed', error);
        })
}