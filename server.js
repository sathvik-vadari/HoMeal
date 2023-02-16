const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static(__dirname));
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(port, function(){
    console.log(`Runnning on http://localhost:${port}`);
})