import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(express.static('./public'))
// Routes

import employee from './routes/employee.routes.js'
import details from './routes/getEmployeeDetails.routes.js'

app.use('/api/employee', employee)
app.use('/api/details', details)

export { app }
