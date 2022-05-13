const express = require('express')
const router = express.Router()
const user =  require('../service/users')

router.post('/create', async (request, response) => {
    response.json(user.create(request, response))
  })
  
router.put('/update/:id', async (request, response) => {
    response.json(user.update(request, response))
  })
  
  module.exports = router;
