addEventListener('fetch', event => {
  event.respondWith(fetchAndApply(event.request))
})

/**
* Make multiple requests, 
* aggregate the responses and 
* send it back as a single response
*/
async function fetchAndApply(request) {
  let v = []
  let i = Math.round(Math.random())
  await fetch('https://cfw-takehome.developers.workers.dev/api/variants')
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    v = data.variants
  })
  url = v[i]  
return fetch(url);
}