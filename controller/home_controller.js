module.exports.signInPage=function(req,res){
    return res.render('signIn',{
        title:"Sign-in"
    })
}

module.exports.signUpPage=function(req,res){
    return res.render('signUp',{
        title:'Sign Up'
    })
}