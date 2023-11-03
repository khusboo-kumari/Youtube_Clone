//  Create a http server using node js
const http = require("http");
// const { updateFunc, deleteFunc } = require("./newModule");

const { create, read, updateFunc, deleteFunc } = require("./newModule.js");

//  For CRUD OPeration
const server = http.createServer(function (req, res) {
  console.log(req.method, req.url);

  if (req.url == "/create" && req.method == 'POST') {
    res.write(JSON.stringify(create(10)));
  } else if (req.url == "/read" && req.method == 'GET') {
    res.write(JSON.stringify(read()));
  } else if (req.url == "/update") {
    res.write(JSON.stringify(updateFunc(0, 100)));
  } else if (req.url == "/delete") {
    res.write(JSON.stringify(deleteFunc(0)));
  }

  res.end();
});

const port = 5000;
server.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});

// const server = http.createServer(function (req, res) {
//   console.log(req.method, req.url);

//   if (req.url == "/") {
//     res.write("Request is good looking");
//   } else if(req.url == '/pizza'){
//     res.write("Requesting pizza is ready");
//   } else{
//     res.write("Request not supported");

//   }

//   res.write("Request looks good. ");
//   res.end();
// });

// const port = 5000;
// server.listen(port, function () {
//   console.log(`Server running on http://localhost:${port}`);
// });
