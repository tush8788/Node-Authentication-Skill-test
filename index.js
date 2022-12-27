const express=require('express');
const expressLayout=require('express-ejs-layouts');
const bodyParser=require('body-parser');
const db=require('./config/mongoose');
const expressSession=require('express-session');
const passport=require('passport');
const LocalStrategy=require('./config/passport-local-strategy');
const googleStrategy=require('./config/passport-google-oauth2-strategy');
const flash=require('connect-flash');
const customMware=require('./config/Noty_middelware');
const MongoStore=require('connect-mongo');

const dotenv=require('dotenv').config();
const port=process.env.PORT||8000;
const app=express();

//set up ejs
app.set('view engine','ejs');
app.set('views','./views');

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// middlewares 
app.use(expressLayout);
app.use(express.static('./assets'));
app.use(bodyParser.urlencoded({extended:false}));

//for session cookie
app.use(expressSession({
    name:"user_id",
    secret:"anyValue",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(10000*60*100)
    },
    //for mongostore
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_URL||'mongodb://localhost/Authentication-Skill-test',
        autoRemove:'disabled'
    },
    function(err){
        console.log(err|| "Connect-mongo setup ok");
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//for notification
app.use(flash());
app.use(customMware.setFlash);

//handle routers
app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is up ${port}`);
})
