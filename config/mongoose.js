const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/Authentication-Skill-test');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error In Connect into db"));

db.once('open',function(){
    console.log("Successfully connect to DB");
})

module.exports=db;