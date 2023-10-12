const url = require("url");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    //request//
    //index
    //about
    //sevices
    const path = req.url;
    if (path == "/about") {
      console.log("about page");
    } else if (path == "/") {
      console.log("home page");

      res.writeHead(200, {
        "content-type": "text/html",
      });

      const fileContent = fs.readFileSync("./views/home.html");
      res.write(fileContent);
      res.end();
    } else if (path == "/services") {
      console.log("services");
    }
  })
  .listen(3000);
