const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server to serve the index.html file
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading page');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 3000; // Change the port to 3001 or any other free port
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
