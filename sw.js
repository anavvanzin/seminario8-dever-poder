// Service Worker — cacheia fontes Google e assets para funcionar offline
const CACHE = 'seminario8-v1';
const FONTS = [
  'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Spectral:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&family=JetBrains+Mono:wght@300;400;500;700&display=swap',
  'https://fonts.gstatic.com/',
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  // Cachear fontes Google e assets do projeto
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com') || url.includes('chart.googleapis.com')) {
    e.respondWith(
      caches.open(CACHE).then((cache) => {
        return cache.match(e.request).then((r) => {
          return r || fetch(e.request).then((res) => {
            if (res.ok) cache.put(e.request, res.clone());
            return res;
          });
        });
      })
    );
  }
});
