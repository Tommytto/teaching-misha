const net = require('net');

const server = net.createServer();

server.on('connection', handleConnection);

server.listen(9000, function() {
    console.log('TCP server started on localhost:9000');
})

function handleConnection(connection) {
    const remoteAddress = connection.remoteAddress + ':' + connection.remotePort;
    console.log('new client connection from %s', remoteAddress);

    connection.write("HTTP/1.1 200 OK\n" +
        "Content-Type: text/html; charset=utf-8\n" +
        "Content-Length: 55743\n" +
        "Connection: keep-alive\n" +
        "Cache-Control: s-maxage=300, public, max-age=0\n" +
        "Content-Language: en-US\n" +
        "Date: Thu, 06 Dec 2018 17:37:18 GMT\n" +
        "ETag: \"2e77ad1dc6ab0b53a2996dfd4653c1c3\"\n" +
        "Server: meinheld/0.6.1\n" +
        "Strict-Transport-Security: max-age=63072000\n" +
        "X-Content-Type-Options: nosniff\n" +
        "X-Frame-Options: DENY\n" +
        "X-XSS-Protection: 1; mode=block\n" +
        "Vary: Accept-Encoding,Cookie\n" +
        "Age: 7\n" +
        "\n" +
        "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "  <meta charset=\"utf-8\">\n" +
        "  <title>A simple webpage</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "  <h1>Simple HTML5 webpage</h1>\n" +
        "  <p>Hello, world!</p>\n" +
        "</body>\n" +
        "</html>")
}

