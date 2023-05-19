const {Router} = require('express')

const { 
    register, 
    login
} = require('../middleware/autentification')


const router = Router()

router.post('/signUp', register)
router.get('/signIn', login)

module.exports = router