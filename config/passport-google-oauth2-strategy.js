const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const UserDB=require('../model/user');

//tell passport to use new strategy call google login
passport.use(new googleStrategy({
    clientID:'920528597342-8j38qq8mt2vtpn2kcej7fa5bq2c6bjfp.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:8000/user/auth/google/callback'
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