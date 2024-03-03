`use strict`;
const { createServer } = require('http');

const PORT = '80';
const HOST = `localhost`

const requestListener = function (req, res) {
    if (req.url === '/json' && req.method == 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({ school: `John Bryce`,
            footballer: `LUKAKUUUUUUUUUUUUUU`
    }));
    return
    }
    
    if (req.url === '/json' && req.method == 'POST') {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        return res.end(JSON.stringify({ school: `John Bryce`,
            footballer: `IMMOBILEEEEEEEEEEEEE`
    }));
    }

    if (req.url === '/csv') {
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", "attachment;filename=johnbryce.csv");
        res.writeHead(200);
        return res.end('id,name,age\n12345678,shahar,47');
    }

    res.writeHead(404);
    return res.end("not found");
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}`);
});
