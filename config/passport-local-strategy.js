const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const UserDB=require('../model/user');
const bcript=require('bcrypt');

passport.use(new LocalStrategy({usernameField:'email',passReqToCallback:true},function(req,email,password,done){
    UserDB.findOne({email:email},async function(err,user)
    {
        if(err){
            req.flash('error',"error in passport auth");
            console.log("error in passport auth ",err);
            return done(err);
        }
        // if(!user || user.password != password)
        // console.log(!bcript.compare(password, user.password));
        if(!user || ! await bcript.compare(password, user.password) ){
            req.flash('error',"Invaild email / password");
            console.log("Invaild email / password");
            return done(null,false);
        }
        return done(null,user);
    })
}))

//for serializeUser
passport.serializeUser(function(user,done){
    done(null,user.id);
})

//for deserializeUser
passport.deserializeUser(function(id,done){
    UserDB.findById(id,function(err,user){
        if(err){
            console.log(err);
            return done(err);
        }
        return done(null,user);
    });
});

//check req user sign in or not 
passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/');
}

module.exports=passport;