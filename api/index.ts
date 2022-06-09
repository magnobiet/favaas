import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");

  return response.status(200).send(`<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="Favicon as a Service">
    <meta name="theme-color" content="#ffbf01">

    <title>Favicon as a Service</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="icon" href="/e/🐝">

  </head>

  <body>

    <div class="container py-5">

      <header class="pb-0 mb-5 border-bottom">

        <h1 class="h3 d-flex justify-content-between">
          Favicon as a Service
          <span>🐝</span>
        </h1>

      </header>

      <main>

        <pre class="bg-light p-3 rounded shadow-sm mb-1"><code>&#x3C;link rel=&#x22;icon&#x22; href=&#x22;https://favicon.magnobiet.com/e/&#x1F41D;&#x22;&#x3E;</code></pre>

        <p class="small">Find emojis at <a class="text-decoration-none" href="https://emojipedia.org/" target="_blank" rel="noreferrer noopener">Emojipedia</a>.</p>

      </main>

      <footer class="mt-5">
        <p class="pt-2 border-top text-muted text-center small">
          Made with ☕ by <a href="https://github.com/magnobiet" target="_blank" rel="noreferrer noopener">@magnobiet</a>
        </p>
      </footer>

    </div>

  </body>

</html>`);
}
