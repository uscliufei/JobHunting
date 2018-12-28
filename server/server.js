 const express = require('express')
 const mongoose = require('mongoose')

 // 链接mongo and use immoc
 const DB_URL = 'mongodb://localhost:27017/imooc'
 mongoose.connect(DB_URL)
 mongoose.connection.on('connected', function(){
 	console.log('mongo connected')
 })

 const app = express()

 const user = mongoose.model('user', new mongoose.Schema({
 	user: {type:String, require: true},
 	age:{type:Number, require: true} 
 }))

 user.create({
 	user:'xiaoming',
 	age: 10
 }, function(err, doc){
 	if(!err){
 		console.log(doc)
 	} else {
 		console.log(err)
 	}
 })

user.remove({age: 18}, function(err, doc){
	console.log(doc)
})
user.update({'user':  'xiaoming'}, {'$set': {age: 25 }}, function(err, doc){
	console.log(doc)
})

 app.get('/data', function(req, res){
 	user.find({user: 'xiaoming'}, function(err, doc){
 		res.json(doc)
 	})
 	//res.json({ name:'haha', gender:'male', city:'LA', School:'USC'})
 })

 app.listen(9093, function(){
 	console.log('Node app start at port 9093')
 }) 