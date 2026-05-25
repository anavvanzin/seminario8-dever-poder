// Service Worker — cacheia fontes Google e assets para funcionar offline
const CACHE = 'seminario8-v2';
const FONTS = [
  'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Spectral:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&family=JetBrains+Mono:wght@300;400;500;700&display=swap',
  'https://fonts.gstatic.com/',
];

// Hosts cujas requisições o SW cacheia (fontes Google + gráficos).
const CACHED_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'chart.googleapis.com'];

self.addEventListener('install', (e) => {
  // Pré-cacheia as fontes para que o claim de "funciona offline" seja real.
  // Um fetch de fonte que falhe não deve quebrar o install.
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(FONTS.map((url) => c.add(url).catch(() => {}))))
      .catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // Apaga caches antigos antes de assumir o controle das páginas.
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  let host;
  try { host = new URL(e.request.url).hostname; } catch (err) { return; }
  // Cachear fontes Google e gráficos do projeto
  if (CACHED_HOSTS.includes(host)) {
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
