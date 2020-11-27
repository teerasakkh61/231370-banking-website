const express = require('express')

// setup server
const PORT = 3000
const app = express()




//Start server
app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`))