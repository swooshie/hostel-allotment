const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var {Users} = require('./models/Users');
var {GroupList} = require('./models/GroupList');
var connection = require('./config.js').mongooseConnection;

var app = express();
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
DATABASE_CONNECTION = connection;

mongoose.connect(DATABASE_CONNECTION,{useNewUrlParser: true});

app.get("/",(req,res)=>{
	var ty = {userf:req.body.username};
	res.send(ty);
});

app.get("/signIn",(req,res)=>{
	var {username,password} = req.body;
	Users.findOne({username:username,password:password},(err,result)=>{
		if(err)
			res.send(err);
		else
			res.send(result);
	});
});

app.post("/register",(req,res)=>{
	var {name,username,email,password,leader,member} = req.body;
	var user = {name:name,username:username,email:email,password:password,leader:leader,member:member};
	Users.create(user,(err,obj)=>{
		if(err){
			console.log(err);
			res.send({status:false, error:err})
		}
		else{
			console.log("new user added!");
			res.send({newUser:obj});
		}
	});
});

app.listen(5000,()=>{
	console.log('listening on port 5000');
});