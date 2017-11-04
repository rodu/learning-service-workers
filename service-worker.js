const CACHE_NAME = 'mycache::v1';
const urlsToCache = [
  '/',
  '/offline.html'
];

// Install phase
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

this.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames
        .filter((cacheName) => cacheName !== CACHE_NAME)
        .map((cacheName) => caches.delete(cacheName))
    ))
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    // When network fails, serve page from cache
    fetch(event.request).catch(() => caches.open(CACHE_NAME)
        .then((cache) => cache.match('/offline.html'))
    )
  );
});
