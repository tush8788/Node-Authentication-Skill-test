const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const UserDB=require('../model/user');

const dotenv=require('dotenv').config();

//tell passport to use new strategy call google login
passport.use(new googleStrategy({
    clientID:process.env.clientID,
    clientSecret:process.env.clientSecret,
    callbackURL:process.env.callbackURL
},async function(accessToken,refreshToken,profile,done){
    try{
        
        //finding user in db
        let user=await UserDB.findOne({email:profile.emails[0].value});
        
        //if user is found 
        if(user){
            return done(null,user);
        }
        else{
            //if user is not found then create new 
            let newUser=await UserDB.create({
                email:profile.emails[0].value,
                password:crypto.randomBytes(20).toString('hex'),
                isGoogle:true
            });
            
            return done(null,newUser);
        }

    }catch(error){}
    
}));

module.exports=passport;