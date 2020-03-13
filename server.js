const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var {Users} = require('./models/Users');
var {GroupList} = require('./models/GroupList');

var app = express();
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
DATABASE_CONNECTION = "mongodb+srv://hardik:hardik@cluster0-zs92y.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(DATABASE_CONNECTION,{useNewUrlParser: true});

app.get("/",(req,res)=>{
	var ty = {userf:req.body.username};
	res.send(ty);
});

app.get("/signIn",(req,res)=>{
	var user = {username:req.body.username,password:re.body.password};
	Users.find(user,(err,obj)=>{
		if(err)
			res.send("hello");
		else
			res.send(obj);
	});
});

app.listen(5000,()=>{
	console.log('listening on port 5000');
});