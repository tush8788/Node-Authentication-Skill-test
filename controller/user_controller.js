const UserDB=require('../model/user');

//sign up
module.exports.SignUp= async function(req,res){
    // console.log(req.body);
    if(req.body.password != req.body.ConfromPassword){
        req.flash('error','password and Conform Password not match');
        console.log('');
        return res.redirect('back');
    }

    let user= await UserDB.findOne({email:req.body.email});

    if(!user){
        await UserDB.create(req.body);
        req.flash('success','signup successfully');
        return res.redirect('/');
    }
    req.flash('error','user Already Ragister');
    return res.redirect('/');

}

//sign in
module.exports.signIn= function(req,res){
    req.flash('success','signin successfully');
    return res.redirect('/user/profile');
}

//profile
module.exports.profile=function(req,res){
    return res.render('profile',{
        title:"profile"
    })
}

//sign out
module.exports.signOut=function(req,res){
    req.logout(function(err){if(err){console.log(err)}});
    req.flash('success','signout successfully');
    res.redirect('/');
}