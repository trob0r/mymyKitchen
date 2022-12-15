import express from 'express';
import userController from '../controllers/userController.js'
const userRoute=express.Router()



userRoute.get('/register', (req, res)=>{
    res.send('Register here')
})

userRoute.get('/login', userController)


export default userRoute;