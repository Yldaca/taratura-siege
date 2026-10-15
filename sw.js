/* Funziona anche senza rete: la pagina si scarica nuova quando c'è connessione, altrimenti si usa la copia salvata. */
var C='taratura-v8.3';
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(C).then(function(c){return c.addAll(['./','manifest.webmanifest','icon-192.png','icon-512.png']);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C;}).map(function(x){return caches.delete(x);}));}).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  var r=e.request;
  if(r.method!=='GET')return;
  var u=new URL(r.url);
  if(r.mode==='navigate'){
    e.respondWith(fetch(r).then(function(res){var cp=res.clone();caches.open(C).then(function(c){c.put('./',cp);});return res;})
      .catch(function(){return caches.match('./');}));
    return;
  }
  if(u.origin===location.origin||/(^|\.)(gstatic|googleapis)\.com$/.test(u.hostname)){
    e.respondWith(caches.match(r).then(function(hit){
      return hit||fetch(r).then(function(res){var cp=res.clone();caches.open(C).then(function(c){c.put(r,cp);});return res;});
    }));
  }
});
