const http = require(`http`);

const hostName = `127.0.0.1`;
const port = `8081`;

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello world from NodeJS');
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
})