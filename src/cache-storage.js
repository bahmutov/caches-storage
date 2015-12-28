// Poor man's async "localStorage" on top of Cache
// https://developer.mozilla.org/en-US/docs/Web/API/Cache
if (typeof caches === 'undefined') {
  throw new Error('Cannot find object caches?! Cannot init cache-storage')
}
/* global caches, Response */
function dataStore (name) {
  var id = name ? name + '-v1' : 'cache-storage-v1'
  return caches.open(id)
    .then(function (cache) {
      return {
        setItem: function (key, data) {
          return cache.put(key, new Response(JSON.stringify(data)))
        },
        getItem: function (key) {
          return cache.match(key)
            .then(function (res) {
              return res &&
                res.text().then(JSON.parse)
            })
        }
      }
    })
}

module.exports = dataStore
