
const server = http.createServer((req,res)=>{
    let body, code;

    switch (req.url){
        case "/":
            body = "Welcome to the place where the cats be";
            code = 200;
            break;
        case "/cats":
            const cats = [{name:"Steve", color:"tabby"}, {name:"Alice", color:"white"}];
            body = JSON.stringify(cats);
            code = 200;
            break;
        default:
            body = `${req.url} Page doesn't exist`;
            code = 404
    }

    res.statusCode = code;
    res.end(body);

});

server.listen(3000, ()=>{console.log("Server running on port 3000")});
