//HTTP methods and status codes

//SQL
/*
heap table 
having 
improving db performance 
*/

const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});


app.get('/test',(req, res)=>{

	res.send("hello Node JS!");	
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});