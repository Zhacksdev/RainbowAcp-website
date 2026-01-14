const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const domain = "rainbowacp.com";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Redirect www → non-www
    if (req.headers.host === "www." + domain) {
      res.writeHead(301, {
        Location: "https://" + domain + req.url,
      });
      res.end();
      return;
    }

    // Handle Next.js routes
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server ready on http://${domain}:${port}`);
  });
});