
module.exports.signInPage=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }
    return res.render('signIn',{
        title:"Sign-in"
    })
}

module.exports.signUpPage=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }
    return res.render('signUp',{
        title:'Sign Up'
    })
}