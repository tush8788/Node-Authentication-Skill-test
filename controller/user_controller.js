const { userInfo } = require('os');
const UserDB=require('../model/user');

module.exports.SignUp= async function(req,res){
    // console.log(req.body);
    if(req.body.password != req.body.ConfromPassword){
        console.log('password and Conform Password not match');
        return res.redirect('back');
    }

    let user= await UserDB.findOne({email:req.body.email});

    if(!user){
        await UserDB.create(req.body);
        return res.redirect('/');
    }

    console.log("user Already Ragiter");
    return res.redirect('/');

}