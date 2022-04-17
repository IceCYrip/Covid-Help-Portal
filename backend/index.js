const connectToMongo = require('./db');

const express = require('express')
const app = express()
const port = 5000


app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/customer', require('./routes/customer'))
app.use('/api/supplier', require('./routes/supplier'))
app.use('/api/dashboard', require('./routes/dashboard'))
app.use('/api/reports', require('./routes/reports'))


app.listen(port, () => {
    console.log(`CHWP - Covid Help Web Portal listening on http://localhost:${port}`)
})

connectToMongo();