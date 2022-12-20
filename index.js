const express=require('express');
const port=8000;

const app=express();

//handle routers
app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is up ${port}`);
})