const express = require('express')
const app = express()
app.use('/yellow', require('./routes'))

app.listen(3000, function(){  
    console.log('Server started on 3000 Port');  
})

