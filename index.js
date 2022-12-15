import express from 'express';
import userRoute from './routes/userRoute.js'
const app=express()
const PORT=process.env.PORT||3000

app.use('/user',userRoute)


app.listen(PORT,()=>console.log(`app is running on port: ${PORT}`))