const express = require('express')
const { homepage } = require('./features/homeController')
const { accountList } = require('./features/accountController')
const { accountDetails } = require('./features/accountDetails')
// Setup
const PORT = 3000
const app = express()

// Middleware
app.use(express.static('public'))

// Routes
app.get('/', homepage)
app.get('/accounts', accountList)
app.get('/accounts/:number', accountDetails)
// Start app
app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`))
