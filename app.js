const express = require('express')
const path = require('path')

//initiating app
var app = express()

//setting views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())

//set public folder
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res)=>{
	res.render('home');
})



app.listen(3000,()=>{
	console.log("server running on port 3000 ....")
})