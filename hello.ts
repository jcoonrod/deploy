// deploy version of hello world
const r=new Response("<h1>Greetings Earthlings!</h1>", {status: 200, headers:{"Content-type":"text/html" } })
addEventListener('fetch', e=>e.respondWith(r));
