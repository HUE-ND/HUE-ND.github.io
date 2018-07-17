const version = "v1::" // Change value to force cache regeneration
const staticCacheName = `${version}static-resources`;

const offlineFiles = [
  '/css/main.css',
  'https://fonts.gstatic.com/s/crimsontext/v8/wlpogwHKFkZgtmSR3NB0oRJfajhRK_Z_3rhH.woff2',
  'https://fonts.gstatic.com/s/crimsontext/v8/wlp2gwHKFkZgtmSR3NB0oRJfbwhTIfFd3A.woff2',
  'https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2'
]

self.addEventListener('install', (event) => {
  console.log('Install')
  event.waitUntil(
    caches
    .open(staticCacheName)
    .then((cache) => {
      return cache.addAll(offlineFiles);
    })
    .then(() => {
      console.log('WORKER:: install completed');
    })
  )
});
