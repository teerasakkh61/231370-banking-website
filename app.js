const express = require('express')
const expressHandlebars = require('express-handlebars')
const { homepage } = require('./features/homeController')
const { accountList, accountDetails } = require('./features/accountController')

// Setup
const PORT = 3000
const app = express()

// Templates
app.set('views', './views')
app.set('view engine', 'html')
app.engine('html', expressHandlebars({
  defaultLayout: false,
  extname: '.html',
  partialsDir: ['./views/partials', './views/layouts']
}))

// Middleware
app.use(express.static('public'))

// Routes
app.get('/', homepage)
app.get('/accounts', accountList)
app.get('/accounts/:number', accountDetails)

// Start app
app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`))
