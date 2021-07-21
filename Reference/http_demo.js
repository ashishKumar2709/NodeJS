const http = require('http');

const server = http.createServer((req, res)=> {
    if (req.url == '/'){
        res.end(`<h1>Home Page</h1>
                <p>Text via node JS</p>
                <a href='/about'> About Page </a>  
                `)

    }
    else if (req.url=='/about'){
        res.end(`
        <h1>About page</h1>
        <a href='/'> back </a>
        `)
    }
})
server.listen(5000)