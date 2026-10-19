const CACHE_NAME = 'pwa-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instala e armazena os arquivos estruturais no cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve os arquivos direto do cache quando estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
