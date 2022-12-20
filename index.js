const express=require('express');
const expressLayout=require('express-ejs-layouts');
const bodyParser=require('body-parser');
const port=8000;
const db=require('./config/mongoose');

const app=express();

//set up ejs
app.set('view engine','ejs');
app.set('views','./views');

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(expressLayout);
app.use(express.static('./assets'));
app.use(bodyParser.urlencoded({extended:false}));
//handle routers
app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is up ${port}`);
})