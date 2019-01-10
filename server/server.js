const express = require('express')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const model = require('./model')
const Chat = model.getModel('chat')
const app = express()
const path = require('path')

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function(socket){
	console.log('user log in')
	socket.on('sendmsg', function(data){
		const {from, to, msg} = data
		console.log(data)
		const chatid = [from, to].sort().join('_')
		Chat.create({chatid, from, to, content: msg, create_time: Date.parse(new Date())}, function(err, doc){
			io.emit('recvmsg', Object.assign({}, doc._doc))
		})
	})
})

const userRouter = require('./user')

app.use(cookieparser())
app.use(bodyparser.json( ))
app.use('/user', userRouter)
app.use(function(req, res, next){
	if(req.url.startsWith('/user/')||req.url.startsWith('/static/')){
		return next()
	}
	return res.sendFile(path.resolve('build/index.html'))
})
app.use('/', express.static(path.resolve('build')))
server.listen(9093, function(){
	console.log('Node app start at port 9093')
}) 