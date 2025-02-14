self.addEventListener('install', () => {
  console.log('Service Worker installing.');
  // Add a call to skipWaiting here if needed
});

self.addEventListener('activate', () => {
  console.log('Service Worker activating.');
  // Add a call to clients.claim() here if needed
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
  // Add custom fetch event handling here if needed
});
