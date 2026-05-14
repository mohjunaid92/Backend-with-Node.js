const express = require("express");
const app = express();

const port  = 3000;
app.listen(port, ()=> {
    console.log(" app is listening");
});

// app.use((req, res)=> {
   
//     console.log("request received");
//     res.send('<h1>junaid</h1>');  


// });

app.get("/",(req,res)=> {
    res.send("you contected with root node");
});
  
app.get("/search", (req,res)=>{
    res.send("you contacted search");
});

app.get("/help", (req,res)=>{
    res.send("you contacted help");
});
app.get("/apple", (req,res)=>{
    res.send("you contacted apple");
});