var cacheName = 'solfeggio-v1';
var cacheFiles = [
  '/Solfeggio/css/main.css',
  '/Solfeggio/img/play.svg',
  '/Solfeggio/img/pause.svg',
  '/Solfeggio/img/sine.svg',
  '/Solfeggio/img/square.svg',
  '/Solfeggio/img/sawtooth.svg',
  '/Solfeggio/img/triangle.svg',
  '/Solfeggio/js/main.js',
  '/Solfeggio/index.html'
];

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheFiles);
    }));
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    }));
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log('[ServiceWorker] Fetch ' + e.request.url);
      return r || fetch(e.request).then((response) => {
        return caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching new resource: ' + e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    }));
});
