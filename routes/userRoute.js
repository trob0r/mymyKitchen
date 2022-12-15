import express from 'express';
const userRoute=express.Router()



userRoute.get('/register', (req, res)=>{
    res.send('Register here')
})

userRoute.get('/login', (req, res)=>{
    res.send('login here')
})


export default userRoute;