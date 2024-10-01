import express, {Express} from 'express'
import cookieParser from "cookie-parser"
import 'dotenv/config'

const app:Express = express()
app.use(express.json()) // to get the req.body
app.use(cookieParser()) // to get the req.cookie(s)

app.listen(process.env.port, () => console.log(
    `Server is up and running, feel free to visit at http://localhost:${process.env.PORT}`
))