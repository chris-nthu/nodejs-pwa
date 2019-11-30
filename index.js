/* domain name : wychen.nctu.me */

const path = require('path')
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/login', userRouter.login)
app.use('/my_class_schedule', userRouter.my_class_schedule)

app.listen(80)