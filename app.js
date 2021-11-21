const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("METHOD", req.method, "\nURL:/", req.url);
  if (req.method === "GET" && req.url === "/") {
    const indexHTML = fs.readFileSync("./index.html");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(indexHTML);
  } else if (req.method === "GET") {
    const [file, extension] = req.url.split(".");
    const resource = fs.readFileSync("." + req.url);
    switch (extension) {
      case "css":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        return res.end(resource);
      case "js":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/javascript");
        return res.end(resource);
      case "ico":
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/x-icon");
        return res.end(resource);
    }
  }
  console.log(req.url.split("."), "split on the .");

  // if (req.method === "GET" && req.url.startsWith("/"))
  return res.end();
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log("Listening on ", port));
