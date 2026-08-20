/**
 * Software Genome Synthesized Service Worker (PWA Offline First)
 * Architecture: ServiceWorker Cache-First & Queue Background Sync
 */

const CACHE_NAME = 'sgx-rural-cache-v1';
const OFFLINE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/genome-data.js',
  '/genome-graph.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('⚡ ServiceWorker: Pre-caching offline genome assets');
      return cache.addAll(OFFLINE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    }).catch(() => {
      console.warn('Network failed; returning offline fallback page');
    })
  );
});
