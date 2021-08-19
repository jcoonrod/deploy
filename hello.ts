// deploy version of hello world
const body=`<!DOCTYPE html>
<html lang=en>
    <head>
        <title>Deploy</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0">
        <meta name="description" content="Learning Deno Deploy.">
    </head>
    <body>
        <a href=/><h1>Greetings Earthlings</h1></a>
    </body>
</html>`;
addEventListener("fetch", (event) => {
    event.respondWith(
      new Response(body, {
        status: 200,
        headers: {
          server: "denosr",
          "content-type": "text/html",
        },
      }),
    );
  });