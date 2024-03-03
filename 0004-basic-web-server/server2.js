const { createServer } = require('http');

const HOST = 'localhost'
const PORT = '80';

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ school: `John Bryce`,
        footballer: `LUKAKUUUUUUUUUUUUUU`
}));
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}`);
});
